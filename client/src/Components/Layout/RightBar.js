import React, { Component } from 'react'
import Card from '../Elements/Card'
import UserThumbnail from '../Elements/UserThumbnail'

export default class LeftBar extends Component {
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
