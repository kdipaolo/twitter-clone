// Home Layout Container
import React, { Component } from 'react'
import { Query } from 'react-apollo'
import Feed from '../Components/Layout/Feed'
import { FEED } from '../utils/queries'
import NewTweetContainer from './NewTweetContainer'

export default class FeedContainer extends Component {
  render() {
    return (
      <Query query={FEED}>
        {({ data: { feed }, loading }) =>
          !loading && (
            <>
              <NewTweetContainer />
              <Feed tweets={feed} />
            </>
          )
        }
      </Query>
    )
  }
}
