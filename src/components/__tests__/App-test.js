jest.unmock('../App')

import React from 'react'
// import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils'
import App from '../App'

const storeProp = {
  name: 'Reaxor',
  description: 'React boilerplate for better state management, styling, testing and cleaner code.',
}

describe('App', () => {
  it('returns the correct text', () => {

    const app = TestUtils.renderIntoDocument(
      <App store={storeProp} />
    )

    const h2 = TestUtils.findRenderedDOMComponentWithTag(app, 'h2')
    const h3 = TestUtils.findRenderedDOMComponentWithTag(app, 'h3')

    expect(h2.textContent).toEqual('Welcome to the Reaxor project!')
    expect(h3.textContent).toEqual('This project is a React boilerplate for better state management, styling, testing and cleaner code.')

    jest.runAllTimers()
  })
})
