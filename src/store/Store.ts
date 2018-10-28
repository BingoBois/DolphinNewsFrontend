import { observable, action } from 'mobx';
import {PostObject} from '../types/post'
import { getPosts } from 'src/api/DataHandler';

class Store {
    
    @observable token: string | undefined = undefined;
    @observable posts: Array<PostObject> = [];
    @observable index: number = 0;
    @observable amount: number = 20;

    @action
    updatePosts(){
        store.amount += 10;
        this.getAllPosts();
    }

    @action
    getAllPosts(){
        getPosts(store.index, store.amount).then((r:any) => {
            console.log(r.posts)
            store.posts = r.posts;
        }).catch(e => console.log(e))
    }


}

const store = new Store();
export default store;
