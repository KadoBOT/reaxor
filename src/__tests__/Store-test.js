jest.unmock('../stores/Store')

import Store from '../stores/Store'

const store = new Store()

describe('MobX Store', () => {
  it('has name and desc', () => {
    expect(store.name).toBeDefined()
    expect(store.description).toBeDefined()
  })
  it('increments numClicks', () => {
    expect(store.numClicks).toEqual(0)
    store.clickButton()
    expect(store.numClicks).toEqual(1)
  })
  it('shows oddOrEven', () => {
    expect(store.oddOrEven).toEqual('odd')
    store.clickButton()
    expect(store.oddOrEven).toEqual('even')
  })
})
