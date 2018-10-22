'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  extend type Query {\n    tweet(id: ID!): Tweet\n    tweets(userId: ID!): [Tweet]!\n    feed: [Tweet]!\n  }\n\n  extend type Mutation {\n    createTweet(message: String!): Tweet\n  }\n\n  type Tweet {\n    id: ID!\n    message: String!\n    user: User\n  }\n'], ['\n  extend type Query {\n    tweet(id: ID!): Tweet\n    tweets(userId: ID!): [Tweet]!\n    feed: [Tweet]!\n  }\n\n  extend type Mutation {\n    createTweet(message: String!): Tweet\n  }\n\n  type Tweet {\n    id: ID!\n    message: String!\n    user: User\n  }\n']);

var _apolloServerExpress = require('apollo-server-express');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } // Tweet Schema


exports.default = (0, _apolloServerExpress.gql)(_templateObject);