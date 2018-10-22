import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import Button from '../Elements/Button'
import { Mutation } from 'react-apollo'
import { SIGN_UP, LOGIN, SIGN_IN } from '../../utils/queries'
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
      margin: ${props => props.theme.space} 0px;
    `};
`

const FormWrapper = styled.form`
  ${props =>
    props.signUp &&
    css`
      background: ${props => props.theme.lightGray};
      padding: 10px;
      max-width: 450px;
      margin: auto;
    `};
`

class Form extends Component {
  state = {
    username: '',
    name: '',
    email: '',
    password: ''
  }
  handleSubmit = async (e, login) => {
    e.preventDefault()
    const { username, name, email, password } = this.state
    const signUpVariables = {
      variables: {
        username,
        email,
        password,
        name
      }
    }
    const signInVariables = {
      variables: {
        login: username,
        password
      }
    }

    const variables = this.props.signUp ? signUpVariables : signInVariables

    const token = await login(variables)

    localStorage.setItem(
      TWITTER_CLONE_TOKEN,
      token.data[this.props.signUp ? 'signUp' : 'signIn'].token
    )

    window.location.reload()
  }
  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    const { signUp, onSubmit } = this.props

    return (
      <FormWrapper
        signUp={signUp}
        onSubmit={e => this.handleSubmit(e, onSubmit)}
      >
        {signUp && (
          <>
            <Input
              name="name"
              onChange={this.handleOnChange}
              type="text"
              required
              placeholder="Name"
              full={this.props.signUp}
            />
            <Input
              name="email"
              onChange={this.handleOnChange}
              type="email"
              required
              placeholder="Email"
              full={this.props.signUp}
            />
          </>
        )}

        <Input
          name="username"
          onChange={this.handleOnChange}
          type="text"
          required
          placeholder="Username"
          full={this.props.signUp}
        />
        <Input
          name="password"
          onChange={this.handleOnChange}
          type="password"
          required
          placeholder="Password"
          full={this.props.signUp}
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
      <Mutation mutation={this.state.signUp ? SIGN_UP : SIGN_IN}>
        {login => (
          <Half>
            <div />

            <SignIn>
              <Form signUp={this.state.signUp} onSubmit={login} />
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
