import { isAuthenticated } from './authorization'
import { combineResolvers } from 'graphql-resolvers'

export default {
  Query: {
    tweet: combineResolvers(
      isAuthenticated,
      async (parent, { id }, { models }) => {
        return await models.Tweet.findById(id)
      }
    ),
    tweets: combineResolvers(
      isAuthenticated,
      async (parent, args, { models }) => {
        return await models.Tweet.findAll()
      }
    )
  },
  Mutation: {
    createTweet: combineResolvers(
      isAuthenticated,
      async (parent, { message, userId, createdAt }, { models, me }) => {
        return await models.Tweet.create({
          message,
          userId: me.id
        })
      }
    )
  },
  Tweet: {
    user: async (parent, args, { models }) => {
      return await models.User.findById(parent.userId)
    }
  }
}
