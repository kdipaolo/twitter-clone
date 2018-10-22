import React from 'react'
import NewTweet from '../NewTweet'
import { render, fireEvent } from 'react-testing-library'

describe('New Tweet Component', () => {
  it('Creates a new tweet on submit', () => {
    const createTweet = jest.fn()
    const reset = jest.fn()
    const message = 'My New Tweet'

    const { getByText } = render(
      <NewTweet
        createTweet={createTweet}
        expand={true}
        message={message}
        reset={reset}
        handleTextareaChange={() => {}}
        expandInput={() => {}}
      />
    )

    fireEvent.click(getByText('Tweet'))

    expect(createTweet).toHaveBeenCalledTimes(1)
    expect(reset).toHaveBeenCalledTimes(1)
  })
})
