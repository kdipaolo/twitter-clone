// User Resolver
import jwt from 'jsonwebtoken'
import { AuthenticationError, UserInputError } from 'apollo-server'
import Sequelize from 'sequelize'

// Takes user info, secret, and expires in data and creates/signs token
const createToken = async (user, secret, expiresIn) => {
  const { id, email, username, name } = user
  return await jwt.sign({ id, email, username, name }, secret, { expiresIn })
}

export default {
  Query: {
    // Get currently logged in user data from JWT
    me: (parent, args, { me }) => {
      return me || {}
    },
    user: async (parent, { username }, { models }) => {
      const user = await models.User.findAll({ where: { username } })
      return user[0]
    },
    whoToFollow: async (parent, args, { models, me }) => {
      const { following: a } = await models.User.findById(me.id)

      const following = a ? [...a, String(me.id)] : [String(me.id)]
      const users = await models.User.findAll()
      return users.filter(user => {
        return !following.includes(String(user.id))
      })
    }
  },
  Mutation: {
    // Sign Up for a new account mutation
    signUp: async (
      parent,
      { username, email, password, name },
      { models, secret }
    ) => {
      // Creating a new user
      const user = await models.User.create({
        username,
        email,
        password,
        name
      })
      /// returning a token for the client side to use for auth
      return {
        token: createToken(user, secret, '30m')
      }
    },
    // Sign in with a login and password
    signIn: async (parent, { login, password }, { models, secret }) => {
      // Find user by either username or email
      const user = await models.User.findByLogin(login)
      // if no user found, throw an error
      if (!user) {
        throw new UserInputError('No user found with this login credentials.')
      }

      const isValid = await user.validatePassword(password)
      // If password is not valid throw an error
      if (!isValid) {
        throw new AuthenticationError('Invalid password.')
      }
      // If there is a user found and thee password is valid
      // returning a token for the client side to use for auth
      return { token: createToken(user, secret, '30m') }
    },
    follow: async (parent, args, { models, me }) => {
      models.User.update(
        {
          following: Sequelize.fn(
            'array_append',
            Sequelize.col('following'),
            args.userId
          )
        },
        { where: { id: me.id } }
      )
      return {
        id: args.userId
      }
    }
  },
  User: {
    // Get all of a users tweets
    tweets: async (parent, args, { models }) => {
      return await models.Tweet.findAll({ where: { userId: parent.id } })
    },
    following: async (parent, args, { models }) => {
      const user = await models.User.findById(parent.id)
      return (user && user.following) || []
    }
  }
}
