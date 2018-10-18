import 'dotenv/config'
import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import cors from 'cors'

const app = express()
app.use(cors())

const port = 8000

const schema = gql`
  type Query {
    me: User
  }

  type User {
    username: String!
  }
`

const resolvers = {
  Query: {
    me: () => {
      return {
        username: 'Kurt DiPaolo'
      }
    }
  }
}

const server = new ApolloServer({
  typeDefs: schema,
  resolvers
})

server.applyMiddleware({ app, path: '/graphql' })

app.listen({ port }, () => {
  console.log(`Apollo Server on http://localhost:${port}/graphql`)
})
