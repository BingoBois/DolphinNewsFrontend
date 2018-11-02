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
  newComment: string
}

export default class PostScreen extends React.Component<any, PostState>{

 
  state = {
    postId: undefined,
    postContent: undefined,
    postUrl: undefined,
    postKarma: undefined,
    comments: [],
    newComment: ""
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
        console.log(this.state.postContent)
      }); 
    }
  }

  getComments(){
    if(this.state.postId){
      //@ts-ignore
      getCommetsFromPostId(this.state.postId).then((data) => {
        //@ts-ignore
        this.setState({comments : data});
        console.log(this.state.comments)
      }); 
    }
  }

  handleCommentInput(event:React.FormEvent<HTMLInputElement>){
  
  this.setState({newComment: event.currentTarget.value})

  }

  handleSubmit = async ( e: React.FormEvent<HTMLFormElement>):Promise<void> => {
      e.preventDefault();
      console.log(this.state.newComment)
  }
 

  render(){
    const comments = this.state.comments.map((comment: RealComment) => {
      return(<Comment key={comment.id} content={comment.content} karma={comment.karma} time={comment.time} fk_user={comment.fk_user} username={comment.username} id={comment.id}/>);
    });


    return(
      <div>
        <p>^{this.state.postKarma} | {this.state.postContent} | Post ID: {this.state.postId}</p>
        <p><a href={this.state.postUrl}>{this.state.postUrl}</a></p>
        
        <div>{comments}</div>

        <h5>New Comment</h5>
        <form  onSubmit={this.handleSubmit}>
          <label htmlFor="test" >
             <input  style={{width:"75%", height: "25px", lineHeight:"1.5em", marginBottom:"20px", display: "inline-block"}} value={this.state.newComment} className="name" onChange={e => this.handleCommentInput(e)} />
           </label>
           <br/>
           <input type="submit" value="Submit Comment" />
        </form>
        
      </div>
    );
  }
}
