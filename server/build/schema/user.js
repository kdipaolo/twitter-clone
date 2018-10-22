'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  extend type Query {\n    me: User\n    whoToFollow: [User]!\n    user(username: String!): User\n  }\n\n  extend type Mutation {\n    signUp(\n      username: String!\n      email: String!\n      password: String!\n      name: String!\n    ): Token!\n    signIn(login: String!, password: String!): Token!\n    follow(userId: ID!): User!\n  }\n\n  type User {\n    id: ID\n    username: String\n    name: String\n    email: String\n    tweets: [Tweet]\n    following: [String]\n  }\n\n  type Token {\n    token: String!\n  }\n'], ['\n  extend type Query {\n    me: User\n    whoToFollow: [User]!\n    user(username: String!): User\n  }\n\n  extend type Mutation {\n    signUp(\n      username: String!\n      email: String!\n      password: String!\n      name: String!\n    ): Token!\n    signIn(login: String!, password: String!): Token!\n    follow(userId: ID!): User!\n  }\n\n  type User {\n    id: ID\n    username: String\n    name: String\n    email: String\n    tweets: [Tweet]\n    following: [String]\n  }\n\n  type Token {\n    token: String!\n  }\n']);

var _apolloServerExpress = require('apollo-server-express');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } // User Schema


exports.default = (0, _apolloServerExpress.gql)(_templateObject);