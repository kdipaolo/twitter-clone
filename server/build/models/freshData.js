'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ = require('./');

var _2 = _interopRequireDefault(_);

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var length = 10;

var users = Array.from({ length: length }).map(function (user) {
  var name = _faker2.default.name.firstName() + ' ' + _faker2.default.name.lastName();
  return {
    name: name,
    email: name.replace(' ', '') + '@test.com',
    username: name.replace(' ', '').toLowerCase(),
    password: 'password',
    tweets: Array.from({ length: 7 }).map(function (tweet) {
      return {
        message: _faker2.default.random.words()
      };
    })
  };
});

exports.default = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          users.map(function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(user) {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return _2.default.User.create({
                        username: user.username,
                        tweets: user.tweets,
                        email: user.email,
                        password: user.password,
                        name: user.name
                      }, {
                        include: [_2.default.Tweet]
                      });

                    case 2:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _callee, undefined);
            }));

            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }());

        case 1:
        case 'end':
          return _context2.stop();
      }
    }
  }, _callee2, undefined);
}));