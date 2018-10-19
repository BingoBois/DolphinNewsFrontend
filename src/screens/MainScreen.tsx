import * as React from 'react';
import '../stylesheets/headerStyles.css';
import * as testData from '../temp/testData.json';
import Post from '../components/Post';
import {getAllPosts} from '../api/DataHandler'

interface testData {
    upvotes: number;
    title: string;
    url: string;
    id: number;
    user: string;
    time: string;
    commentCount: number;
}

class MainScreen extends React.Component {

    public render() {
        
        getAllPosts();

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