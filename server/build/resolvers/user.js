'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _apolloServer = require('apollo-server');

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // User Resolver


// Takes user info, secret, and expires in data and creates/signs token
var createToken = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(user, secret, expiresIn) {
    var id, email, username, name;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = user.id, email = user.email, username = user.username, name = user.name;
            _context.next = 3;
            return _jsonwebtoken2.default.sign({ id: id, email: email, username: username, name: name }, secret, { expiresIn: expiresIn });

          case 3:
            return _context.abrupt('return', _context.sent);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function createToken(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = {
  Query: {
    // Get currently logged in user data from JWT
    me: function me(parent, args, _ref2) {
      var _me = _ref2.me;

      return _me || {};
    },
    user: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(parent, _ref4, _ref5) {
        var username = _ref4.username;
        var models = _ref5.models;
        var user;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return models.User.findAll({ where: { username: username } });

              case 2:
                user = _context2.sent;
                return _context2.abrupt('return', user[0]);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, undefined);
      }));

      return function user(_x4, _x5, _x6) {
        return _ref3.apply(this, arguments);
      };
    }(),
    whoToFollow: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(parent, args, _ref7) {
        var models = _ref7.models,
            me = _ref7.me;

        var _ref8, a, following, users;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return models.User.findById(me.id);

              case 2:
                _ref8 = _context3.sent;
                a = _ref8.following;
                following = a ? [].concat(_toConsumableArray(a), [String(me.id)]) : [String(me.id)];
                _context3.next = 7;
                return models.User.findAll();

              case 7:
                users = _context3.sent;
                return _context3.abrupt('return', users.filter(function (user) {
                  return !following.includes(String(user.id));
                }));

              case 9:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, undefined);
      }));

      return function whoToFollow(_x7, _x8, _x9) {
        return _ref6.apply(this, arguments);
      };
    }()
  },
  Mutation: {
    // Sign Up for a new account mutation
    signUp: function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(parent, _ref10, _ref11) {
        var username = _ref10.username,
            email = _ref10.email,
            password = _ref10.password,
            name = _ref10.name;
        var models = _ref11.models,
            secret = _ref11.secret;
        var user;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return models.User.create({
                  username: username,
                  email: email,
                  password: password,
                  name: name
                });

              case 2:
                user = _context4.sent;
                return _context4.abrupt('return', {
                  token: createToken(user, secret, '30m')
                });

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, undefined);
      }));

      return function signUp(_x10, _x11, _x12) {
        return _ref9.apply(this, arguments);
      };
    }(),
    // Sign in with a login and password
    signIn: function () {
      var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(parent, _ref13, _ref14) {
        var login = _ref13.login,
            password = _ref13.password;
        var models = _ref14.models,
            secret = _ref14.secret;
        var user, isValid;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return models.User.findByLogin(login);

              case 2:
                user = _context5.sent;

                if (user) {
                  _context5.next = 5;
                  break;
                }

                throw new _apolloServer.UserInputError('No user found with this login credentials.');

              case 5:
                _context5.next = 7;
                return user.validatePassword(password);

              case 7:
                isValid = _context5.sent;

                if (isValid) {
                  _context5.next = 10;
                  break;
                }

                throw new _apolloServer.AuthenticationError('Invalid password.');

              case 10:
                return _context5.abrupt('return', { token: createToken(user, secret, '30m') });

              case 11:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, undefined);
      }));

      return function signIn(_x13, _x14, _x15) {
        return _ref12.apply(this, arguments);
      };
    }(),
    follow: function () {
      var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(parent, args, _ref16) {
        var models = _ref16.models,
            me = _ref16.me;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                models.User.update({
                  following: _sequelize2.default.fn('array_append', _sequelize2.default.col('following'), args.userId)
                }, { where: { id: me.id } });
                return _context6.abrupt('return', {
                  id: args.userId
                });

              case 2:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, undefined);
      }));

      return function follow(_x16, _x17, _x18) {
        return _ref15.apply(this, arguments);
      };
    }()
  },
  User: {
    // Get all of a users tweets
    tweets: function () {
      var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(parent, args, _ref18) {
        var models = _ref18.models;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return models.Tweet.findAll({ where: { userId: parent.id } });

              case 2:
                return _context7.abrupt('return', _context7.sent);

              case 3:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, undefined);
      }));

      return function tweets(_x19, _x20, _x21) {
        return _ref17.apply(this, arguments);
      };
    }(),
    following: function () {
      var _ref19 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(parent, args, _ref20) {
        var models = _ref20.models;
        var user;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return models.User.findById(parent.id);

              case 2:
                user = _context8.sent;
                return _context8.abrupt('return', user && user.following || []);

              case 4:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, undefined);
      }));

      return function following(_x22, _x23, _x24) {
        return _ref19.apply(this, arguments);
      };
    }()
  }
};