export default {
  Query: {
    me: (parent, args, { me }) => {
      return me
    }
  },
  User: {
    tweets: async (parent, args, { models }) => {
      return await models.Tweet.findAll({ where: { userId: parent.id } })
    }
  }
}
