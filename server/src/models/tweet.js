const tweet = (sequelize, DataTypes) => {
  const Tweet = sequelize.define('tweet', {
    message: {
      type: DataTypes.STRING,
      validate: { notEmpty: true }
    }
  })

  Tweet.associate = models => {
    Tweet.belongsTo(models.User)
  }

  return Tweet
}

export default tweet
