// @flow

import React from 'react';
import { observer } from 'mobx-react';
import { css } from 'aphrodite';
import {styles} from './styles.css'
import MyComponent from '../MyComponent/MyComponent';

@observer
class App extends React.Component {
  render () {

    const { store } = this.props;

    return (
      <div>
        <h2 className={css(styles.hover)}>Welcome to the {store.name} project!</h2>
        <h3>This project is {store.description}.</h3>
        <MyComponent store={store} />
      </div>
    );
  }
}

App.propTypes = {
  store: React.PropTypes.object
};

export default App;
