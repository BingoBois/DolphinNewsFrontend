import { observable } from 'mobx';

class Store {
    
    @observable token: string = '';

}

const store = new Store();
export default store;