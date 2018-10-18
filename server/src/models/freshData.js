import models from './'

const users = [
  { username: 'kdipaolo', tweets: [{ message: 'First tweet' }] },
  {
    username: 'johndoe',
    tweets: [{ message: 'Second tweet' }, { message: 'Third tweet' }]
  },
  {
    username: 'edipaolo',
    tweets: [{ message: 'Fourth tweet' }, { message: 'Fifth tweet' }]
  }
]

export default async () => {
  users.map(async user => {
    await models.User.create(
      {
        username: user.username,
        tweets: user.tweets
      },
      {
        include: [models.Tweet]
      }
    )
  })
}
