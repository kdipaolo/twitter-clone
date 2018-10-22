'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _authorization = require('./authorization');

var _graphqlResolvers = require('graphql-resolvers');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // Tweet Resolver


exports.default = {
  Query: {
    // If user is authenticated, shows a single tweet
    tweet: (0, _graphqlResolvers.combineResolvers)(_authorization.isAuthenticated, function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(parent, _ref2, _ref3) {
        var id = _ref2.id;
        var models = _ref3.models;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return models.Tweet.findById(id);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }()),
    // If user is authenticated, shows all tweets
    tweets: (0, _graphqlResolvers.combineResolvers)(_authorization.isAuthenticated, function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(parent, _ref5, _ref6) {
        var userId = _ref5.userId;
        var models = _ref6.models;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return models.Tweet.findAll({ where: { userId: userId } });

              case 2:
                return _context2.abrupt('return', _context2.sent);

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, undefined);
      }));

      return function (_x4, _x5, _x6) {
        return _ref4.apply(this, arguments);
      };
    }()),
    feed: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(parent, args, _ref8) {
        var models = _ref8.models,
            me = _ref8.me;

        var _ref9, following, tweets;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return models.User.findById(me.id);

              case 2:
                _ref9 = _context3.sent;
                following = _ref9.following;

                if (!following) {
                  _context3.next = 11;
                  break;
                }

                _context3.next = 7;
                return models.Tweet.findAll({
                  where: {
                    userId: [].concat(_toConsumableArray(following), [String(me.id)])
                  }
                });

              case 7:
                tweets = _context3.sent;
                return _context3.abrupt('return', tweets);

              case 11:
                return _context3.abrupt('return', []);

              case 12:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, undefined);
      }));

      return function feed(_x7, _x8, _x9) {
        return _ref7.apply(this, arguments);
      };
    }()
  },
  Mutation: {
    // If user is authenticated, create a new tweet
    createTweet: (0, _graphqlResolvers.combineResolvers)(_authorization.isAuthenticated, function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(parent, _ref11, _ref12) {
        var message = _ref11.message,
            userId = _ref11.userId,
            createdAt = _ref11.createdAt;
        var models = _ref12.models,
            me = _ref12.me;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return models.Tweet.create({
                  message: message,
                  userId: me.id
                });

              case 2:
                return _context4.abrupt('return', _context4.sent);

              case 3:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, undefined);
      }));

      return function (_x10, _x11, _x12) {
        return _ref10.apply(this, arguments);
      };
    }())
  },
  Tweet: {
    // Return the user property if the user is asked for in the tweet query
    user: function () {
      var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(parent, args, _ref14) {
        var models = _ref14.models;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return models.User.findById(parent.userId);

              case 2:
                return _context5.abrupt('return', _context5.sent);

              case 3:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, undefined);
      }));

      return function user(_x13, _x14, _x15) {
        return _ref13.apply(this, arguments);
      };
    }()
  }
};