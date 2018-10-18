export default {
  Query: {
    tweet: async (parent, { id }, { models }) => {
      return await models.Tweet.findById(id)
    },
    tweets: async (parent, args, { models }) => {
      return await models.Tweet.findAll()
    }
  },
  Mutation: {
    createTweet: async (
      parent,
      { message, userId, createdAt },
      { models, me }
    ) => {
      return await models.Tweet.create({
        message,
        userId: me.id
      })
    }
  },
  Tweet: {
    user: async (parent, args, { models }) => {
      return await models.User.findById(parent.userId)
    }
  }
}
