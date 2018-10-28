import * as React from 'react';
import '../stylesheets/headerStyles.css';
import Post from '../components/Post';
import {getAllPosts, getAllComments} from '../api/DataHandler';
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
        this.getAllCommentsFunction();
    }

   getAllPostFunction(){
    getAllPosts().then((data) => {
        console.log(data);
        this.setState({posts : data}, () => {
            console.log(this.state.posts);
        });
       
       }); 
    }

    getAllCommentsFunction(){
        getAllComments().then((data) => {
            console.log(data);
            this.setState({comments : data}, () => {
                console.log(this.state.comments);
            })
        })
    }

    

    public render() {

        /*
        console.log(getAllCommentsWithVote());
        console.log(getAllPostVotes());
        console.log(getAmountofCommentsInPost());
        const test = "what the hell";
        */

      

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

          //@ts-ignore
       const commentTableTest = this.state.comments && this.state.comments.map((data: CommentObject, index: number) => {
        console.log(data.commentId)

        return(
            
            <p>{data.commentContent}</p>
       
        )
        })

   

        return (
            <div className="MainScreen">
                {tableData}
                {commentTableTest}
            </div>
        );
    }

}
export default MainScreen;