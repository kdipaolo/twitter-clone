'use strict';

require('dotenv/config');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _apolloServerExpress = require('apollo-server-express');

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

var _resolvers = require('./resolvers');

var _resolvers2 = _interopRequireDefault(_resolvers);

var _models = require('./models');

var _models2 = _interopRequireDefault(_models);

var _freshData = require('./models/freshData');

var _freshData2 = _interopRequireDefault(_freshData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// Initializing express server
var app = (0, _express2.default)();

// Using CORS
app.use((0, _cors2.default)());

app.get('/', function (req, res) {
  res.send('Go to /graphql for API');
});

// Getting and verifying JWT
var getMe = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req) {
    var token;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = req.headers['x-token'];

            if (!token) {
              _context.next = 11;
              break;
            }

            _context.prev = 2;
            _context.next = 5;
            return _jsonwebtoken2.default.verify(token, process.env.SECRET);

          case 5:
            return _context.abrupt('return', _context.sent);

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](2);
            throw new _apolloServerExpress.AuthenticationError('Your session expired. Sign in again.');

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[2, 8]]);
  }));

  return function getMe(_x) {
    return _ref.apply(this, arguments);
  };
}();

var port = process.env.PORT || 8888;

// Initializing the express server the
var server = new _apolloServerExpress.ApolloServer({
  introspection: true,
  typeDefs: _schema2.default,
  resolvers: _resolvers2.default,
  context: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3) {
      var req = _ref3.req;
      var me;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return getMe(req);

            case 2:
              me = _context2.sent;
              return _context2.abrupt('return', {
                models: _models2.default,
                me: me,
                secret: process.env.SECRET
              });

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function context(_x2) {
      return _ref2.apply(this, arguments);
    };
  }()
});

// Applying graphql route
server.applyMiddleware({ app: app, path: '/graphql' });

var freshDatabase = false;

// if fresh database flag set to true then load in fresh data
_models.sequelize.sync({ force: freshDatabase }).then(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
  return regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (freshDatabase) {
            (0, _freshData2.default)();
          }
          // Start up server and listen on port
          app.listen({ port: port }, function () {
            console.log('Apollo Server on http://localhost:' + port + '/graphql');
          });

        case 2:
        case 'end':
          return _context3.stop();
      }
    }
  }, _callee3, undefined);
})));