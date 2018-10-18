import { ForbiddenError } from 'apollo-server'
import { skip } from 'graphql-resolvers'

export const isAuthenticated = (parent, args, { me }) =>
  me ? skip : new ForbiddenError('Not authenticated as user.')

export const isTweetOwner = async (parent, { id }, { models, me }) => {
  const message = await models.Tweet.findById(id, { raw: true })

  if (message.userId !== me.id) {
    throw new ForbiddenError('Not authenticated as owner.')
  }

  return skip
}
