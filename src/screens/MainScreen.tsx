import * as React from 'react';
import '../stylesheets/headerStyles.css';
import Post from '../components/Post';
import {getAllPosts} from '../api/DataHandler';
import {observer} from 'mobx-react';
import { PostObject } from 'src/types/post';
import {CommentObject} from 'src/types/comment';

interface mainScreenState { 
posts: Array<PostObject> | undefined;
comments: Array<CommentObject> | undefined;
}

@observer 
class MainScreen extends React.Component<any, mainScreenState> {

    state = {
        posts: undefined,
        comments: undefined
    }

    componentWillMount(){
        this.getAllPostFunction();
    }

   getAllPostFunction(){
    getAllPosts().then((data) => {
        console.log(data);
        this.setState({posts : data});
       
       }); 
    }
    
    public render() {
        //@ts-ignore
        const tableData = this.state.posts && this.state.posts.map((data: PostObject, index: number) => {
            return (
                <Post
                key={index}
                id = {data.postId}
                index = {index + 1}
                title = {data.post_title}
                user= {data.userName}
                url = {data.post_url}
                time= {data.postTime}
                upvotes ={21}
                commentCount = {27}
                postText = {data.post_text}
                />
            )
        })

        return (
            <div className="MainScreen">
                {tableData}
                <br/>
                <h4>Comment Test</h4>
            </div>
        );
    }

}
export default MainScreen;
