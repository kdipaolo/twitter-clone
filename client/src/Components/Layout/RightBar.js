// Who to follow Right Bar Component
import React, { Component } from 'react'
import Card from '../Elements/Card'
import UserThumbnail from '../Elements/UserThumbnail'

export default class RightBar extends Component {
  render() {
    const user = {
      username: 'kdipaolo',
      name: 'Kurt DiPaolo'
    }
    return (
      <Card>
        <h3>Who to follow</h3>
        <UserThumbnail user={user} />
        <UserThumbnail user={user} />
        <UserThumbnail user={user} />
      </Card>
    )
  }
}
