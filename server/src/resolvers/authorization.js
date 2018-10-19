import { ForbiddenError } from 'apollo-server'
import { skip } from 'graphql-resolvers'

// If the token was verified and the me object was populated allow next resolver to run
export const isAuthenticated = (parent, args, { me }) =>
  me ? skip : new ForbiddenError('Not authenticated as user.')

// If the tweet is the owners tweet move on to the next resolver
export const isTweetOwner = async (parent, { id }, { models, me }) => {
  const tweet = await models.Tweet.findById(id, { raw: true })

  if (tweet.userId !== me.id) {
    throw new ForbiddenError('Not authenticated as owner.')
  }

  return skip
}
