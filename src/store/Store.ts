import { observable, action } from 'mobx';
import {PostObject} from '../types/post'
import { getPosts, login } from 'src/api/DataHandler';
import UserObject from 'src/types/user';

class Store {
    
    @observable token: string | undefined = undefined;
    @observable posts: Array<PostObject> = [];
    @observable index: number = 0;
    @observable amount: number = 20;
    @observable user: UserObject = {id: 0, username: "", password: "", email: "", karma: 0, role: "member"};

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

    @action
    loginUser(username: string, password: string) {
        login(username, password)
        .then((response: UserObject) => store.user = response)
        .catch(e => console.log(e))
    }

}

const store = new Store();
export default store;
