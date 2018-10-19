// Who to follow Right Bar Component
import React, { Component } from 'react'
import Card from '../Elements/Card'
import UserThumbnail from '../Elements/UserThumbnail'

export default class RightBar extends Component {
  render() {
    return (
      <Card>
        <h3>Who to follow</h3>
        <UserThumbnail />
        <UserThumbnail />
        <UserThumbnail />
      </Card>
    )
  }
}
