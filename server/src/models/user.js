// User Model
import bcrypt from 'bcryptjs'

const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
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
    }
  })

  User.associate = models => {
    User.hasMany(models.Tweet, { onDelete: 'CASCADE' })
  }
  // Finds a user either by their email or username
  User.findByLogin = async login => {
    let user = await User.findOne({
      where: { username: login }
    })

    if (!user) {
      user = await User.findOne({
        where: { email: login }
      })
    }

    return user
  }

  // Before a user is created hash the password
  User.beforeCreate(async user => {
    user.password = await user.generatePasswordHash()
  })

  // generate the password has with bcrypt
  User.prototype.generatePasswordHash = async function() {
    const saltRounds = 10
    return await bcrypt.hash(this.password, saltRounds)
  }
  // Validate the password by comparing the password entered and the users password in the db with bcrypt
  User.prototype.validatePassword = async function(password) {
    return await bcrypt.compare(password, this.password)
  }

  return User
}

export default user
