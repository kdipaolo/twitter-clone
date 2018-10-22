'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  type Query {\n    _: Boolean\n  }\n\n  type Mutation {\n    _: Boolean\n  }\n\n  type Subscription {\n    _: Boolean\n  }\n'], ['\n  type Query {\n    _: Boolean\n  }\n\n  type Mutation {\n    _: Boolean\n  }\n\n  type Subscription {\n    _: Boolean\n  }\n']);

var _apolloServerExpress = require('apollo-server-express');

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _tweet = require('./tweet');

var _tweet2 = _interopRequireDefault(_tweet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } // Combining all schemas into one master scehma for apollo server


var linkSchema = (0, _apolloServerExpress.gql)(_templateObject);

exports.default = [linkSchema, _user2.default, _tweet2.default];