import jwt from 'jsonwebtoken'
import { AuthenticationError, UserInputError } from 'apollo-server'

const createToken = async (user, secret, expiresIn) => {
  const { id, email, username } = user
  return await jwt.sign({ id, email, username }, secret, { expiresIn })
}

export default {
  Query: {
    me: (parent, args, { me }) => {
      return me
    }
  },
  Mutation: {
    signUp: async (parent, { username, email, password }, { secret }) => {
      const user = await models.User.create({
        username,
        email,
        password
      })
      return {
        token: createToken(user, secret, '30m')
      }
    },
    signIn: async (parent, { login, password }, { models, secret }) => {
      const user = models.User.findByLogin(login)
      if (!user) {
        throw new UserInputError('No user found with this login credentials.')
      }
      const isValid = await user.validatePassword(password)

      if (!isValid) {
        throw new AuthenticationError('Invalid password.')
      }

      return { token: createToken(user, secret, '30m') }
    }
  },
  User: {
    tweets: async (parent, args, { models }) => {
      return await models.Tweet.findAll({ where: { userId: parent.id } })
    }
  }
}
