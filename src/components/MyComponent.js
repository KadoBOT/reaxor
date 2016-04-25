import React from 'react';
import { css } from 'aphrodite';
import {styles} from '../styles/styles.css';
import { observer } from 'mobx-react';

const MyComponent = ({ store }) => {
  const clickButton = store.clickButton;
  return (
    <div>
      <button
        onClick={clickButton}
        type='button'
      >
        Click me!
      </button>
      <h4>You've clicked the button {store.numClicks} times!</h4>
      <h5>You've clicked button an <span className={css(styles[store.oddOrEven])}>{store.oddOrEven}</span> number of times.</h5>
    </div>
  );
}

MyComponent.propTypes = {
  store: React.PropTypes.object
};

export default observer(MyComponent);
