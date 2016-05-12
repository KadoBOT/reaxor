jest.unmock('../components/App')

import React from 'react'
import {shallow} from 'enzyme'
import App from '../components/App'
import Store from '../stores/Store'

const store = new Store()

describe('<App />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App store={store} />)
  })

  afterEach(() => {
    jest.runAllTimers()
  })

  it('has a h2 with the right content', () => {
    expect(wrapper.find('h2').text()).toEqual(`Welcome to the ${store.name} project!!!`)
  })

  it('has a h3 with the right content', () => {
    expect(wrapper.find('h3').text()).toEqual(`This project is a ${store.description}.`)
  })
})
