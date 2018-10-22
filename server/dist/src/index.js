'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import jwt from 'jsonwebtoken'

// import schema from './schema'
// import resolvers from './resolvers'
// import models, { sequelize } from './models'
// import freshData from './models/freshData'

// Initializing express server
// import 'dotenv/config'
var app = (0, _express2.default)();

// Using CORS

// import { ApolloServer, AuthenticationError } from 'apollo-server-express'
app.use((0, _cors2.default)());

app.get('/', function (req, res) {
  res.send('Go to /graphql for API');
});

// Getting and verifying JWT
// const getMe = async req => {
//   const token = req.headers['x-token']

//   if (token) {
//     // if token and if token is verified return the getMe object
//     try {
//       return await jwt.verify(token, process.env.SECRET)
//     } catch (e) {
//       // If now throw an error
//       throw new AuthenticationError('Your session expired. Sign in again.')
//     }
//   }
// }

// const port = process.env.PORT || 8888

// // Initializing the express server the
// const server = new ApolloServer({
//   introspection: true,
//   typeDefs: schema,
//   resolvers,
//   context: async ({ req }) => {
//     // padding in models, me object, and secret to all resolvers with context
//     const me = await getMe(req)

//     return {
//       models,
//       me,
//       secret: process.env.SECRET
//     }
//   }
// })

// // Applying graphql route
// server.applyMiddleware({ app, path: '/graphql' })

// const freshDatabase = false

// // if fresh database flag set to true then load in fresh data
// sequelize.sync({ force: freshDatabase }).then(async () => {
//   if (freshDatabase) {
//     freshData()
//   }
//   // Start up server and listen on port
//   app.listen({ port }, () => {
//     console.log(`Apollo Server on http://localhost:${port}/graphql`)
//   })
// })