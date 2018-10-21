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
import Home from './Layout/Home'
import Moments from './Layout/Moments'
import Notifications from './Layout/Notifications'
import Messages from './Layout/Messages'
import UserProfile from './Layout/User'
import Login from './Layout/Login'

const Wrapper = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 5% auto;
`

const Container = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr 2fr 1fr;
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
                  <Card noPad>
                    <Route exact path="/" component={Home} />
                    <Route path="/moments" component={Moments} />
                    <Route path="/notifications" component={Notifications} />
                    <Route path="/messages" component={Messages} />
                    {/* User Profile View */}
                    <Route path="/user/:username" component={UserProfile} />
                  </Card>
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
