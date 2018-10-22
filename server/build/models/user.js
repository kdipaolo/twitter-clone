'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // User Model


var user = function user(sequelize, DataTypes) {
  var User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [7, 42]
      }
    },
    following: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    }
  });

  User.associate = function (models) {
    User.hasMany(models.Tweet, { onDelete: 'CASCADE' });
  };
  // Finds a user either by their email or username
  User.findByLogin = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(login) {
      var user;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return User.findOne({
                where: { username: login }
              });

            case 2:
              user = _context.sent;

              if (user) {
                _context.next = 7;
                break;
              }

              _context.next = 6;
              return User.findOne({
                where: { email: login }
              });

            case 6:
              user = _context.sent;

            case 7:
              return _context.abrupt('return', user);

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();

  // Before a user is created hash the password
  User.beforeCreate(function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(user) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return user.generatePasswordHash();

            case 2:
              user.password = _context2.sent;

            case 3:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());

  // generate the password has with bcrypt
  User.prototype.generatePasswordHash = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var saltRounds;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            saltRounds = 10;
            _context3.next = 3;
            return _bcryptjs2.default.hash(this.password, saltRounds);

          case 3:
            return _context3.abrupt('return', _context3.sent);

          case 4:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  // Validate the password by comparing the password entered and the users password in the db with bcrypt
  User.prototype.validatePassword = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(password) {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _bcryptjs2.default.compare(password, this.password);

            case 2:
              return _context4.abrupt('return', _context4.sent);

            case 3:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    return function (_x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  return User;
};

exports.default = user;