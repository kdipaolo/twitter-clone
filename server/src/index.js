import 'dotenv/config'
import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import cors from 'cors'

import schema from './schema'
import resolvers from './resolvers'
import models, { sequelize } from './models'
import freshData from './models/freshData'

const app = express()
app.use(cors())

const port = 8000

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    models,
    me: {}
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
