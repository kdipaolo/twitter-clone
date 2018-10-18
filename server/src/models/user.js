const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING
    }
  })

  User.associate = models => {
    User.hasMany(models.Tweet, { onDelete: 'CASCADE' })
  }

  return User
}

export default user
