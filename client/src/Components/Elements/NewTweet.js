// New Tweet Component
import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import ProfilePicture from './ProfilePicture'
import Button from './Button'

const Container = styled.form`
  padding: ${props => props.theme.space};
  background: ${props => props.theme.lightBlue};
  text-align: right;
`

const Input = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: ${props => props.theme.space};
  margin-bottom: ${props => props.theme.space};
  align-items: flex-start;
`

const Textarea = styled.textarea`
  outline: none;
  border-radius: 7px;
  border: 1px solid ${props => props.theme.lightGray};
  padding: ${props => props.theme.space};
  font-size: 1.4rem;
  resize: none;
  height: 40px;
  ::-webkit-input-placeholder {
    color: ${props => props.theme.blue};
  }
  ${props =>
    props.expand &&
    css`
      height: 100px;
      border: 1px solid ${props => props.theme.blue};
      ::-webkit-input-placeholder {
        color: ${props.theme.lightGray};
      }
    `};
`

export default class NewTweet extends Component {
  render() {
    const {
      createTweet,
      reset,
      handleTextareaChange,
      message,
      expandInput,
      expand
    } = this.props

    return (
      <Container
        onSubmit={async e => {
          e.preventDefault()
          reset()
          await createTweet()
        }}
      >
        <Input>
          <ProfilePicture />
          <Textarea
            onChange={handleTextareaChange}
            value={message}
            placeholder="What's happening?"
            onClick={expandInput}
            expand={expand}
          />
        </Input>
        {expand && (
          <Button type="submit" disabled={!message}>
            Tweet
          </Button>
        )}
      </Container>
    )
  }
}

NewTweet.propTypes = {
  createTweet: PropTypes.func.isRequired,
  expand: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  reset: PropTypes.func.isRequired,
  handleTextareaChange: PropTypes.func.isRequired,
  expandInput: PropTypes.func.isRequired
}
