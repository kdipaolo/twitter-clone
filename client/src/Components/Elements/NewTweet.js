// New Tweet Component
import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import styled, { css } from 'styled-components'

import ProfilePicture from './ProfilePicture'
import Button from './Button'
import { CREATE_TWEET } from '../../utils/queries'

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
  state = {
    expand: false,
    message: ''
  }
  expand = () => {
    this.setState({
      expand: true
    })
  }
  handleTextareaChange = e => {
    this.setState({
      message: e.target.value
    })
  }
  render() {
    const { expand, message } = this.state
    return (
      <Mutation
        mutation={CREATE_TWEET}
        variables={{ message: this.state.message }}
        refetchQueries={['feed', 'me']}
      >
        {createTweet => (
          <Container
            onSubmit={async e => {
              e.preventDefault()
              await createTweet()
              this.setState({
                message: '',
                expand: false
              })
            }}
          >
            <Input>
              <ProfilePicture />
              <Textarea
                onChange={this.handleTextareaChange}
                value={message}
                placeholder="What's happening?"
                onClick={this.expand}
                expand={expand}
              />
            </Input>
            {expand && (
              <Button type="submit" disabled={!message}>
                Tweet
              </Button>
            )}
          </Container>
        )}
      </Mutation>
    )
  }
}
