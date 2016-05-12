jest.unmock('../components/MyComponent')

import React from 'react'
import {shallow} from 'enzyme'
import MyComponent from '../components/MyComponent'
import Store from '../stores/Store'

const store = new Store()

describe('<MyComponent />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<MyComponent store={store} />)
  })

  afterEach(() => {
    jest.runAllTimers()
  })

  it('changes value on click', () => {
    expect(wrapper.find('h4').text()).toEqual('You\'ve clicked the button 0 times!')
    expect(wrapper.find('h5').text()).toEqual('You\'ve clicked button an even number of times.')
    wrapper.find('button').simulate('click')
    expect(wrapper.find('h4').text()).toEqual('You\'ve clicked the button 1 times!')
    expect(wrapper.find('h5').text()).toEqual('You\'ve clicked button an odd number of times.')
  })
})
