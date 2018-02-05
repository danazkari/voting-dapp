import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { withRouter } from 'react-router'
import store, { history } from 'store'
import { App } from 'containers'

import 'index.css'

const target = document.querySelector('#root')
const NonBlockApp = withRouter(App)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <NonBlockApp />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
