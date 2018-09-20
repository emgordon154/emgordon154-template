import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import App from './App'

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>
)

// why is this throwing an error
// and telling me PropTypes.object is undefined now?

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
