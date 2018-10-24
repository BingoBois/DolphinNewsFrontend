import * as React from 'react';
import '../stylesheets/headerStyles.css';
import * as testData from '../temp/testData.json';
import Post from '../components/Post';
import {getAllPosts} from '../api/DataHandler';
//import { resolve } from 'url';


interface testData {
    upvotes: number;
    title: string;
    url: string;
    id: number;
    user: string;
    time: string;
    commentCount: number;
}

interface realData {
    userID: number,
    user: string,
    userpost: string,
    postId: number,
    url: string,
    time: string
}



class MainScreen extends React.Component<{}, realData> {


    state: realData = {
    userID: 0,
    user: "user0",
    userpost: "thismightwork",
    postId: 0,
    url: "www.work.dk",
    time: "31-12-2018"
    }

    public render() {
        console.log(getAllPosts());

        console.log(this.state.user);
        


        //@ts-ignore
        const tableData = testData.map((data: testData, index: number) => {
            return (
                <Post
                    key={index}
                    title={data.title}
                    index={index + 1}
                    url={data.url}
                    upvotes={data.upvotes}
                    id={data.id}
                    user={data.user}
                    time={data.time}
                    commentCount={data.commentCount}
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