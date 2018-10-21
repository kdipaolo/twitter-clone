import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import Button from '../Elements/Button'
import { Mutation } from 'react-apollo'
import { SIGN_UP } from '../../utils/queries'
import { TWITTER_CLONE_TOKEN } from '../../config'

const Half = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  > div:first-of-type {
    background: ${props => props.theme.blue};
  }
  > div:last-of-type {
    background: ${props => props.theme.white};
  }
`

const SignIn = styled.div`
  padding: 3% 10%;
  text-align: center;
`

const Info = styled.div`
  max-width: 400px;
  margin: 20% auto;
  text-align: left;
  h2 {
    font-size: 3rem;
    max-width: 400px;
    line-height: 1.25;
  }
`

const Input = styled.input`
  padding: 10px;
  font-size: 1.3rem;
  margin-right: 10px;
  border: 1px solid ${props => props.theme.lightGray};
  ::-webkit-input-placeholder {
    color: ${props => props.theme.darkGray};
  }
  ${props =>
    props.full &&
    css`
      width: 100%;
    `};
`

const FormWrapper = styled.form`
  ${props =>
    props.signUp &&
    css`
      background: ${props => props.theme.lightGray};
      padding: 10px;
    `};
`

class Form extends Component {
  state = {
    username: '',
    name: '',
    email: '',
    password: ''
  }
  handleSubmit = async (e, signUp) => {
    e.preventDefault()
    const { username, name, email, password } = this.state

    const token = await signUp({
      variables: {
        username,
        email,
        password,
        name
      }
    })
    localStorage.setItem(TWITTER_CLONE_TOKEN, token.data.signUp.token)
    window.location.reload()
  }
  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    const { signUp, mutation } = this.props
    return (
      <FormWrapper
        signUp={signUp}
        onSubmit={e => this.handleSubmit(e, mutation)}
      >
        {signUp && (
          <Input
            name="name"
            onChange={this.handleOnChange}
            type="text"
            required
            placeholder="Name"
          />
        )}
        <Input
          name="email"
          onChange={this.handleOnChange}
          type="email"
          required
          placeholder="Email"
        />
        <Input
          name="username"
          onChange={this.handleOnChange}
          type="text"
          required
          placeholder="Username"
        />
        <Input
          name="password"
          onChange={this.handleOnChange}
          type="password"
          required
          placeholder="Password"
        />
        <Button type="submit" hollow>
          {signUp ? 'Sign Up' : 'Log In'}
        </Button>
      </FormWrapper>
    )
  }
}

export default class Login extends Component {
  state = {
    signUp: false
  }
  toggleSignUp = () => {
    this.setState(state => ({ signUp: !state.signUp }))
  }

  render() {
    return (
      <Mutation mutation={SIGN_UP}>
        {signUp => (
          <Half>
            <div />
            <SignIn>
              <Form signUp={this.state.signUp} mutation={signUp} />
              <Info>
                <h2>See what’s happening in the Kurt's world right now</h2>
                <h3>Join Twitter Clone today.</h3>
                <Button full onClick={this.toggleSignUp}>
                  Sign Up
                </Button>
                <Button full hollow>
                  Log In
                </Button>
              </Info>
            </SignIn>
          </Half>
        )}
      </Mutation>
    )
  }
}
