import * as React from 'react';
import '../stylesheets/headerStyles.css';
import Post from '../components/Post';
import {observer} from 'mobx-react';
import { PostObject } from 'src/types/post';
import {CommentObject} from 'src/types/comment';
import store from '../store/Store'

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


    componentDidMount(){
        store.getAllPosts()
    }
    
    public render() {

        /*
        console.log(getAllCommentsWithVote());
        console.log(getAllPostVotes());
        console.log(getAmountofCommentsInPost());
        const test = "what the hell";
        */

        const tableData = store.posts.map((data: PostObject, index: number) => {
            return (
                <Post
                key={index}
                id = {data.id}
                index = {index + 1}
                title = {data.post_title}
                user= {data.username}
                url = {data.post_url}
                time= {data.time}
                postText = {data.post_text}
                />
            )
        })

          //@ts-ignore
       const commentTableTest = this.state.comments && this.state.comments.map((data: CommentObject, index: number) => {
        console.log(data.commentId)

        return(
            
            <div key={index}>
                <p>{data.commentContent}</p>
            </div>
        )
        })


        return (
            <div className="MainScreen">
                {tableData}
                <br/>
                {commentTableTest}
                <h2 style={{marginBottom: 40, cursor: 'pointer'}} onClick={() => {
                    store.updatePosts()
                }}>More</h2>

            </div>
        );
    }

}
export default MainScreen;
