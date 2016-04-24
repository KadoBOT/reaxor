jest.unmock('../components/App');

import React from 'react';
// import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import App from '../components/App';

const storeProp = {
  name: 'Reaxor',
  description: 'Hello'
}

describe('App', () => {
  it('returns the correct text', () => {

    const app = TestUtils.renderIntoDocument(
      <App store={storeProp} />
    );

    const h2 = TestUtils.findRenderedDOMComponentWithTag(app, 'h2')
    const h3 = TestUtils.findRenderedDOMComponentWithTag(app, 'h3')

    expect(h2.textContent).toEqual('Welcome to the Reaxor project!');
    expect(h3.textContent).toEqual('This project is Hello.')

    jest.runAllTimers()
  });
});
