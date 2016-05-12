import { observable, computed } from 'mobx'

class Store {
  //Autorun is a function from MobX that runs everytime that something inside is
  //updated. In the example below, everytime 'numClicks' is updated, autorun will run
  //the console.warn
  //
  // import {autorun} from 'mobx'
  // constructor() {
  //   autorun(() => console.warn('MobX autorun - Whenever numClicks has it value updated, console.log runs: ', this.numClicks))
  // }

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
