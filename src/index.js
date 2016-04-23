import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import a11y  from 'react-a11y'
import Store from './stores/Store';
import App from './components/App/App';

const store = new Store();

if(process.env.NODE_ENV === 'development') {
  a11y(React);
}

render(
  <AppContainer
    component={App}
    props={{ store }}
  />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./components/App/App', () => {
    render(
      <AppContainer
        component={require('./components/App/App').default}
        props={{ store }}
      />,
      document.getElementById('root')
    );
  });
}
