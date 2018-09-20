import React from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

const App = () => (
  <Switch>
    <Route exact path="/" />
    <Redirect to="/" />
  </Switch>
)

export default App
