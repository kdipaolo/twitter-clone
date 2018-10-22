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
      async (parent, { userId }, { models }) => {
        return await models.Tweet.findAll({ where: { userId } })
      }
    ),
    feed: async (parent, args, { models, me }) => {
      // Get the user id's that the user is following
      const { following } = await models.User.findById(me.id)
      // If the user is following users, get all the tweets from these users
      // if not return an empty array
      if (following) {
        const tweets = await models.Tweet.findAll({
          where: {
            userId: [...following, String(me.id)]
          }
        })

        return tweets
      } else {
        return []
      }
    }
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
