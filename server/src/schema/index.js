// Combining all schemas into one master scehma for apollo server
import { gql } from 'apollo-server-express'
import userSchema from './user'
import tweetsSchema from './tweet'

const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`

export default [linkSchema, userSchema, tweetsSchema]
