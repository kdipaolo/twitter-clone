// All routes for application here
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Authenticated from './Utils/Authenticated'

// Elements
import Header from './Layout/Header'
import LeftBar from './Layout/LeftBar'
import RightBar from './Layout/RightBar'
import Card from './Elements/Card'

// Routes
import Notifications from './Layout/Notifications'
import Messages from './Layout/Messages'
import UserProfile from './Layout/UserProfile'
import FeedContainer from '../Containers/FeedContainer'
import FollowersContainer from '../Containers/FollowersContainer'

const Wrapper = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 5% auto;
  @media (max-width: ${props => props.theme.breakPoint}) {
    margin: 10% auto;
  }
`

const Container = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr 2fr 1fr;

  @media (max-width: ${props => props.theme.breakPoint}) {
    grid-template-columns: 1fr;
    & > div {
      margin: 0px ${props => props.theme.space};
    }
  }
`

export default function Routes() {
  return (
    <Authenticated>
      {currentUser => (
        <Router>
          <>
            <Header />

            <Wrapper>
              <Switch>
                <Container>
                  <LeftBar user={currentUser} />
                  <div>
                    <Card noPad>
                      <Route exact path="/" component={FeedContainer} />
                      <Route path="/following" component={FollowersContainer} />
                      <Route path="/notifications" component={Notifications} />
                      <Route path="/messages" component={Messages} />
                      {/* User Profile View */}
                      <Route
                        path="/user/:username"
                        component={() => (
                          <UserProfile currentUser={currentUser} />
                        )}
                      />
                    </Card>
                  </div>
                  <RightBar />
                </Container>
              </Switch>
            </Wrapper>
          </>
        </Router>
      )}
    </Authenticated>
  )
}
