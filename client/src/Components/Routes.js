import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import Home from './Layout/Home'
import Moments from './Layout/Moments'
import Notifications from './Layout/Notifications'
import Messages from './Layout/Messages'
import Header from './Layout/Header'

const MainContainer = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 5% auto;
`

export default function Routes() {
  return (
    <Router>
      <>
        <Header />
        <MainContainer>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/moments" component={Moments} />
            <Route path="/notifications" component={Notifications} />
            <Route path="/messages" component={Messages} />
          </Switch>
        </MainContainer>
      </>
    </Router>
  )
}
