import React from 'react'
import { render, fireEvent } from 'react-testing-library'

import Feed from '../Feed'

describe('Feed Component', () => {
  it('If no tweets show no content message', () => {
    const { container } = render(<Feed tweets={[]} />)
    expect(container.innerHTML).toContain("You're not following anyone :)")
  })
})
