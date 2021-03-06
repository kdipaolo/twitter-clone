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
      // Get following ID's from user profile
      const { following } = await models.User.findById(me.id)
      // If there are followers combine them with the user ID, if not just show the user id in an array
      const followingUsers = following
        ? [...following, String(me.id)]
        : [String(me.id)]
      // Get All Users (TODO: Refactor for performance)
      const users = await models.User.findAll()
      // Only return users that are in the following array
      return users.filter(user => {
        return !followingUsers.includes(String(user.id))
      })
    },
    followers: async (parent, args, { models, me }) => {
      // Logged in users's ID
      const id = String(me.id)
      // All Users
      const users = await models.User.findAll()
      // TODO: Make this more performant by using sequlize to only pull by followers
      return users.filter(
        // If users has logged in users id in following reutrn it
        user => user.following && user.following.includes(id)
      )
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
        token: createToken(user, secret, '12h')
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
      return { token: createToken(user, secret, '12h') }
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
