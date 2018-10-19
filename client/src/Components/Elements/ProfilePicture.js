import React, { Component } from 'react'
import defaultProfile from '../../images/profile-picture.png'
import styled from 'styled-components'

const Image = styled.img`
  clip-path: circle(20px at center);
`

export default class ProfilePicture extends Component {
  render() {
    return (
      <div>
        <Image src={defaultProfile} alt="Default User Profile" width="50" />
      </div>
    )
  }
}
