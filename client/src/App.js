import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Components/Layout/Home'
import Moments from './Components/Layout/Moments'
import Notifications from './Components/Layout/Notifications'
import Messages from './Components/Layout/Messages'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/moments" component={Moments} />
            <Route exact path="/notifications" component={Notifications} />
            <Route exact path="/messages" component={Messages} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
