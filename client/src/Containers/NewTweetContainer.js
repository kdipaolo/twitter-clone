// New Tweet Component
import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { CREATE_TWEET } from '../utils/queries'
import NewTweet from '../Components/Elements/NewTweet'

export default class NewTweetContainer extends Component {
  state = {
    expand: false,
    message: ''
  }
  expandInput = () => {
    this.setState({
      expand: true
    })
  }
  handleTextareaChange = e => {
    this.setState({
      message: e.target.value
    })
  }
  reset = e => {
    this.setState({
      message: '',
      expand: false
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
          <NewTweet
            createTweet={createTweet}
            expand={expand}
            message={message}
            reset={this.reset}
            handleTextareaChange={this.handleTextareaChange}
            expandInput={this.expandInput}
          />
        )}
      </Mutation>
    )
  }
}
