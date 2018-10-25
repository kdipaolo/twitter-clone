import { render } from 'react-testing-library'
import React from 'react'

import Following from '../Following'

describe('Following view - shows users followers', () => {
  it('user is not following anyone, show no followers message', () => {
    const user = []
    const { debug, container } = render(<Following users={user} />)
    expect(container.innerHTML).toContain('You are not following anyone')
  })
  it('user is following other user, show the users', () => {
    const user = [
      {
        id: 1,
        name: 'Kurt DiPaolo',
        username: 'kdipaolo',
        email: 'kurt@test.com'
      }
    ]
    const { container } = render(<Following users={user} />)

    expect(container.innerHTML).toContain(user[0].name)
    expect(container.innerHTML).toContain(user[0].username)
    expect(container.innerHTML).toContain(user[0].email)
  })
})
