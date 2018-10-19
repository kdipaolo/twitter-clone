import models from './'

const users = [
  {
    email: 'kdipaolo@test.com',
    username: 'kdipaolo',
    password: 'password',
    name: 'Kurt DiPaolo',
    tweets: [{ message: 'First tweet' }]
  },
  {
    email: 'johndoe@test.com',
    username: 'johndoe',
    password: 'password',
    name: 'John Doe',
    tweets: [{ message: 'Second tweet' }, { message: 'Third tweet' }]
  },
  {
    email: 'edipaolo@test.com',
    username: 'edipaolo',
    password: 'password',
    name: 'Emma DiPaolo',
    tweets: [{ message: 'Fourth tweet' }, { message: 'Fifth tweet' }]
  }
]

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
