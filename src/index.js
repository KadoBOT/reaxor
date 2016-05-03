import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import a11y  from 'react-a11y'
<<<<<<< HEAD
import Store from './stores/Store'
import App from './components/App'
=======
import Store from './stores/Store';
import App from './components/App';
>>>>>>> 131aba6645b52d6366740c62264a5ce162b1f97e

const store = new Store()

if(process.env.NODE_ENV === 'development') {
  a11y(React)
}

render(
  <AppContainer>
    <App store={{ store }} />
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(
<<<<<<< HEAD
      <AppContainer>
        <App store={{ store }} />
      </AppContainer>,
=======
      <AppContainer
        component={require('./components/App').default}
        props={{ store }}
      />,
>>>>>>> 131aba6645b52d6366740c62264a5ce162b1f97e
      document.getElementById('root')
    )
  })
}
