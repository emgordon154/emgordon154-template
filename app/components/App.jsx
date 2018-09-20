import React from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import Placeholder from './Placeholder'

const App = () => (
  <Switch>
    <Route exact path="/" component={Placeholder} />
    <Redirect to="/" />
  </Switch>
)

export default App
