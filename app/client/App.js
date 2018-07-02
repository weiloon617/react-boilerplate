import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from './routes/Main'
import About from './routes/About'

export default class App extends Component {
  render() {
    return (
      <div>
        Your React Node app is set up!
        <main>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/about" component={About} />
          </Switch>
        </main>
      </div>
    )
  }
}
