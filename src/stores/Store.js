import { autorun, observable, computed } from 'mobx'

class Store {
  //TODO: write a better autorun
  constructor() {
    autorun(() => console.log('Whenever numClicks changes I log: ', this.numClicks))
  }

  name = 'Reaxor';
  description = 'React boilerplate for better state management, styling, testing and cleaner code';
  @observable numClicks = 0;

  @computed get oddOrEven() {
    return this.numClicks % 2 === 0 ? 'even' : 'odd'
  }


  clickButton = () => {
    this.numClicks++
  }
}

export default Store
