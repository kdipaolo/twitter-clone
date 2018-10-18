import models from './'

const users = [
  {
    email: 'kdipaolo@test.com',
    username: 'kdipaolo',
    password: 'password',
    tweets: [{ message: 'First tweet' }]
  },
  {
    email: 'johndoe@test.com',
    username: 'johndoe',
    password: 'password',
    tweets: [{ message: 'Second tweet' }, { message: 'Third tweet' }]
  },
  {
    email: 'edipaolo@test.com',
    username: 'edipaolo',
    password: 'password',
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
        password: user.password
      },
      {
        include: [models.Tweet]
      }
    )
  })
}
