import { observable } from 'mobx';

class Store {
    
    @observable token: string | undefined = undefined;

}

const store = new Store();
export default store;
