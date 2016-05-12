// @flow

import React, {PropTypes} from 'react'
import { css, StyleSheet } from 'aphrodite'
// import {styles} from '../styles/styles.css'
import { observer } from 'mobx-react'

const styles = StyleSheet.create({
    odd: {
      color: 'white',
      background: 'blue',
    },

    even: {
      color: 'blue',
      background: 'white',
    },
})

const MyComponent = ({store}) => {
  const {clickButton, numClicks, oddOrEven} = store
  return (
    <div className="MyComponent">
      <button
        onClick={clickButton}
        type="button"
      >
        Click me!
      </button>
      <h4>You've clicked the button {numClicks} times!</h4>
      <h5>You've clicked button an <span className={css(styles[oddOrEven])}>{oddOrEven}</span> number of times.</h5>
    </div>
  )
}

MyComponent.propTypes = {
  store: PropTypes.object,
}

export default observer(MyComponent)
