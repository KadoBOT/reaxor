import { autorun, observable, computed } from 'mobx'

class Store {
  name = 'Reaxor Store';
  description = 'Hello World';
  @observable numClicks = 0;

  @computed get oddOrEven() {
    return this.numClicks % 2 === 0 ? 'even' : 'odd'
  }

  clickButton = () => {
    this.numClicks++
  }
}

export default Store
