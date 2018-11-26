import { observable, action } from 'mobx';
import { PostObject } from '../types/post'
import { getPosts, login, getAllVotedPostIdsByUserId, getAllVotedCommentIdsByUserId } from 'src/api/DataHandler';
import UserObject from 'src/types/user';

class Store {

    @observable posts: Array<PostObject> = [];
    @observable index: number = 0;
    @observable amount: number = 20;
    @observable user: UserObject | undefined = undefined;

    @action
    updatePosts() {
        store.amount += 10;
        this.getAllPosts();
    }

    @action
    getAllPosts() {
        getPosts(store.index, store.amount).then((r: any) => {
            store.posts = r.posts;
        }).catch(e => console.log(e))
    }

    @action
    loginUser(username: string, password: string) {
        return new Promise((resolve, reject) => {
            login(username, password)
                .then((response: UserObject) => {
                    //@ts-ignore
                    if (response.error === 500) {
                        reject(response)
                    }
                    else {
                        store.user = response;
                        resolve(response);
                    }
                })
                .catch(error => reject(error));
        });
    }

    @action
    getAllVotedPostIdsByUser() {
        if (store.user && store.user.id) {
            getAllVotedPostIdsByUserId(store.user.id)
                //@ts-ignore
                .then(postIds => store.user.votedPostIds = postIds)
                .catch(error => console.log(error))
        }
    }

    @action
    getAllVotedCommentIdsByUser() {
        if (store.user && store.user.id) {
            getAllVotedCommentIdsByUserId(store.user.id)
                //@ts-ignore
                .then(commentIds => store.user.votedCommentIds = commentIds)
                .catch(error => console.log(error))
        }
    }
}

const store = new Store();
export default store;
