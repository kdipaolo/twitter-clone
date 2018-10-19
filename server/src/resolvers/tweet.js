// Tweet Resolver
import { isAuthenticated } from './authorization'
import { combineResolvers } from 'graphql-resolvers'

export default {
  Query: {
    // If user is authenticated, shows a single tweet
    tweet: combineResolvers(
      isAuthenticated,
      async (parent, { id }, { models }) => {
        return await models.Tweet.findById(id)
      }
    ),
    // If user is authenticated, shows all tweets
    tweets: combineResolvers(
      isAuthenticated,
      async (parent, args, { models }) => {
        return await models.Tweet.findAll()
      }
    )
  },
  Mutation: {
    // If user is authenticated, create a new tweet
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
    // Return the user property if the user is asked for in the tweet query
    user: async (parent, args, { models }) => {
      return await models.User.findById(parent.userId)
    }
  }
}
