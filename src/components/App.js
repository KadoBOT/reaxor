// @flow

import React from 'react';
import { observer } from 'mobx-react';
import { css } from 'aphrodite';
import {styles} from '../styles/styles.css';
import MyComponent from './MyComponent';

@observer
class App extends React.Component {
  render () {

    const { store } = this.props;

    return (
      <div>
        <h2 className={css(styles.red)}>Name: {store.name}</h2>
        <h3 className={css(styles.animate)}>Description: {store.description}</h3>
        <MyComponent store={store} />
      </div>
    );
  }
}

App.propTypes = {
  store: React.PropTypes.object
};

export default App;
