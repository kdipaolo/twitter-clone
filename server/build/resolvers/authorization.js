'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTweetOwner = exports.isAuthenticated = undefined;

var _apolloServer = require('apollo-server');

var _graphqlResolvers = require('graphql-resolvers');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// If the token was verified and the me object was populated allow next resolver to run
var isAuthenticated = exports.isAuthenticated = function isAuthenticated(parent, args, _ref) {
  var me = _ref.me;
  return me ? _graphqlResolvers.skip : new _apolloServer.ForbiddenError('Not authenticated as user.');
};

// If the tweet is the owners tweet move on to the next resolver
var isTweetOwner = exports.isTweetOwner = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(parent, _ref3, _ref4) {
    var id = _ref3.id;
    var models = _ref4.models,
        me = _ref4.me;
    var tweet;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return models.Tweet.findById(id, { raw: true });

          case 2:
            tweet = _context.sent;

            if (!(tweet.userId !== me.id)) {
              _context.next = 5;
              break;
            }

            throw new _apolloServer.ForbiddenError('Not authenticated as owner.');

          case 5:
            return _context.abrupt('return', _graphqlResolvers.skip);

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function isTweetOwner(_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();