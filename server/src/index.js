import 'dotenv/config'
import express from 'express'
import { ApolloServer, AuthenticationError } from 'apollo-server-express'
import cors from 'cors'
import jwt from 'jsonwebtoken'

import schema from './schema'
import resolvers from './resolvers'
import models, { sequelize } from './models'
import freshData from './models/freshData'

const app = express()
app.use(cors())

const getMe = async req => {
  const token = req.headers['x-token']

  if (token) {
    try {
      return await jwt.verify(token, process.env.SECRET)
    } catch (e) {
      throw new AuthenticationError('Your session expired. Sign in again.')
    }
  }
}

const port = 8000

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: async ({ req }) => {
    const me = await getMe(req)

    return {
      models,
      me,
      secret: process.env.SECRET
    }
  }
})

server.applyMiddleware({ app, path: '/graphql' })

const freshDatabase = true

sequelize.sync({ force: freshDatabase }).then(async () => {
  if (freshDatabase) {
    freshData()
  }
  app.listen({ port }, () => {
    console.log(`Apollo Server on http://localhost:${port}/graphql`)
  })
})
