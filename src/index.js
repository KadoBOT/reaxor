import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Redbox from 'redbox-react'
import a11y  from 'react-a11y'
import Store from './stores/Store'
import App from './components/App'
import {whyDidYouUpdate} from 'why-did-you-update'

const store = new Store()

const consoleErrorReporter = ({error}) => {
  console.error(error)
  return <Redbox error={error} />
}

consoleErrorReporter.propTypes = {
  error: React.PropTypes.error,
}

if(process.env.NODE_ENV === 'development') {
  a11y(React)
  whyDidYouUpdate(React)
  // You can include and exclude components:
  // whyDidYouUpdate(React, { include: /^pure/, exclude: /^Connect/ })
}

render(
  <AppContainer>
    <App store={store} />
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./components/App.js', () => {
    let AppNext = require('./components/App').default
    render(
      <AppContainer>
        <AppNext store={store} />
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
