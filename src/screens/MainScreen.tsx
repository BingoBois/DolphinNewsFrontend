import * as React from 'react';
import '../stylesheets/headerStyles.css';
import Post from '../components/Post';
import {getAllPosts} from '../api/DataHandler';
import {observer} from 'mobx-react';
import { PostObject } from 'src/types/post';

interface mainScreenState {
posts: Array<PostObject> | undefined;
}

@observer 
class MainScreen extends React.Component<any, mainScreenState> {

    state = {
        posts: undefined
    }

    componentWillMount(){
        this.getAllPostFunction();
    }

   getAllPostFunction(){
    getAllPosts().then((data) => {
        console.log(data);
        this.setState({posts : data}, () => {
            console.log(this.state.posts);
        });
       
       }); 
    }

    public render() {

        //@ts-ignore
        const tableData = this.state.posts && this.state.posts.map((data: PostObject, index: number) => {
            return (
                <Post
                  
                key={index}
                id = {data.postID}
                index = {index + 1}
                title = {data.postTitle}
                user= {data.userName}
                url = {data.postURL}
                time= {data.postTime}
                upvotes ={21}
                commentCount = {27}
                postText = {data.postText}

                />
            )
        })

        return (
            <div className="MainScreen">
                {tableData}
            </div>
        );
    }

}
export default MainScreen;