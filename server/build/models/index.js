'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = undefined;

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sequelize = void 0;

if (process.env.DATABASE_URL) {
  exports.sequelize = sequelize = new _sequelize2.default(process.env.DATABASE_URL, {
    dialect: 'postgres'
  });
} else {
  exports.sequelize = sequelize = new _sequelize2.default(process.env.DATABASE, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    dialect: 'postgres'
  });
}

var models = {
  User: sequelize.import('./user'),
  Tweet: sequelize.import('./tweet')
};

Object.keys(models).forEach(function (key) {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

exports.sequelize = sequelize;
exports.default = models;