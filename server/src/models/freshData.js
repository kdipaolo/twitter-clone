import models from './'
import faker from 'faker'

const length = 10

const users = Array.from({ length }).map(user => ({
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  email: `${faker.name.firstName()}${faker.name.lastName()}@test.com`,
  username: `${faker.name.firstName()}${faker.name.lastName()}`.toLowerCase(),
  password: 'password',
  tweets: Array.from({ length: 7 }).map(tweet => ({
    message: faker.random.words()
  }))
}))

export default async () => {
  users.map(async user => {
    await models.User.create(
      {
        username: user.username,
        tweets: user.tweets,
        email: user.email,
        password: user.password,
        name: user.name
      },
      {
        include: [models.Tweet]
      }
    )
  })
}
