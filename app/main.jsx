import React from 'react'

import {render} from 'react-dom'

//const placeholder = <div id="placeholder" > Placeholder </div>

import store from './store'

import Root from './components/Root'

render(
  //placeholder,
  <Root store={store} />,
  document.getElementById('main')
)
