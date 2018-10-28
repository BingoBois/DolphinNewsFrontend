import * as React from 'react';
import Comment from '../components/Comment';
import { getCommetsFromPostId, getPostById } from '../api/DataHandler';
import { RealComment } from 'src/types/realcomment';

interface PostState {
  postId: number | undefined,
  postContent: string | undefined,
  postUrl: string | undefined,
  postKarma: number | undefined,
  comments: Array<RealComment> | undefined
}

export default class PostScreen extends React.Component<any, PostState>{
  state = {
    postId: undefined,
    postContent: undefined,
    postUrl: undefined,
    postKarma: undefined,
    comments: []
  }

  componentWillMount(){
    this.setState({
      postId: parseInt(window.location.href.split('/')[4]),
    }, () => {
      this.getComments()
      this.getPost()
    });
  }

  getPost(){
    if(this.state.postId){
      //@ts-ignore
      getPostById(this.state.postId).then((data) => {
        //@ts-ignore
        this.setState({postContent : data[0].post_text, postUrl: data[0].post_url, postKarma: 85});
      }); 
    }
  }

  getComments(){
    if(this.state.postId){
      //@ts-ignore
      getCommetsFromPostId(this.state.postId).then((data) => {
        //@ts-ignore
        this.setState({comments : data});
      }); 
    }
  }

  render(){
    const comments = this.state.comments.map((comment: RealComment) => {
      return(<Comment key={comment.id} content={comment.content} karma={comment.karma} time={comment.time} fk_user={comment.fk_user} username={comment.username} id={comment.id}/>);
    });
    return(
      <div>
        <p>^{this.state.postKarma} | {this.state.postContent}</p>
        <p><a href={this.state.postUrl}>{this.state.postUrl}</a></p>
        <div>{comments}</div>
      </div>
    );
  }
}
