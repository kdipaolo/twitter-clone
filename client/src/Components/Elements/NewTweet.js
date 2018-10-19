import React, { Component } from 'react'
import ProfilePicture from './ProfilePicture'
import styled, { css } from 'styled-components'
import Button from './Button'

const Container = styled.div`
  padding: 10px;
  background: ${props => props.theme.lightBlue};
  text-align: right;
`

const Input = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 10px;
  margin-bottom: 10px;
  align-items: flex-start;
`

const Textarea = styled.textarea`
  outline: none;
  border-radius: 7px;
  border: 1px solid ${props => props.theme.lightGray};
  padding: 10px;
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
  unExpand = () => {
    this.setState({
      expand: false
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
      <Container>
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
        {expand && <Button disabled={!message}>Tweet</Button>}
      </Container>
    )
  }
}
