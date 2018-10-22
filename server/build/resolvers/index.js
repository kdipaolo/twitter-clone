'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _tweet = require('./tweet');

var _tweet2 = _interopRequireDefault(_tweet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Combining all resolver files into one master file for apollo server
exports.default = [_user2.default, _tweet2.default];