'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Tweet Model
var tweet = function tweet(sequelize, DataTypes) {
  var Tweet = sequelize.define('tweet', {
    message: {
      type: DataTypes.STRING,
      validate: { notEmpty: true }
    }
  });

  Tweet.associate = function (models) {
    Tweet.belongsTo(models.User);
  };

  return Tweet;
};

exports.default = tweet;