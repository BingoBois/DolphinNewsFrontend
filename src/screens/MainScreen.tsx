import * as React from 'react';
import '../stylesheets/headerStyles.css';
import * as testData from '../temp/testData.json';
import Post from '../components/Post';
import {getAllPosts} from '../api/DataHandler'

interface testData {
    upvotes: number;
    userpost: string;
    url: string;
    postId: number;
    user: string;
    time: string;
    commentCount: number;
}

class MainScreen extends React.Component {

    state = {
        posts: testData
    };

    componentDidMount() {
        this.posts;
      }

      //@ts-ignore
      const posts = getAllPosts().then(data => data["Post"].map((post: testData, index: number) => {
        return (
            <Post 
                key={index} 
                title={post.userpost} 
                index={index + 1} 
                url={post.url} 
                upvotes={post.upvotes} //Mangler fra backend
                id={post.postId}
                user={post.user} 
                time={post.time} //Mangler fra backend
                commentCount={post.commentCount} //Mangler fra backend
            />
        )
    }))

    public render() {

        console.log(this.state)

        //@ts-ignore
        // const tableData = testData.map((data: testData, index: number) => {
        //     return (
        //         <Post 
        //             key={index} 
        //             title={data.userpost} 
        //             index={index + 1} 
        //             url={data.url} 
        //             upvotes={data.upvotes} 
        //             id={data.postId}
        //             user={data.user} 
        //             time={data.time}
        //             commentCount={data.commentCount}
        //         />
        //     )
        // })

        return (
            <div className="MainScreen">
                {this.posts}
            </div>
        );
    }

}

export default MainScreen;