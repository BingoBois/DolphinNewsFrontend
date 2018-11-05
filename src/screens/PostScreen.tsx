import * as React from 'react';
import Comment from '../components/Comment';
import { getCommetsFromPostId, getPostById, postNewComment } from '../api/DataHandler';
import { RealComment } from 'src/types/realcomment';

interface PostState {
  postId: number | undefined,
  postContent: string | undefined,
  postUrl: string | undefined,
  postKarma: number | undefined,
  comments: Array<RealComment> | undefined
  post_text: string
  username: string
  pwdHash: string
  comment_hanesst_id: number
}

export default class PostScreen extends React.Component<any, PostState>{

 
  state = {
    postId: undefined,
    postContent: undefined,
    postUrl: undefined,
    postKarma: undefined,
    comments: [],
    post_text: "",
    username: "",
    pwdHash: "",
    comment_hanesst_id: 0
  }

 

  componentWillMount(){
    this.setState({
      postId: parseInt(window.location.href.split('/')[4]),
    }, () => {
      this.getComments()
      this.getPost()
    });
  }

handleUserNameInput(event:React.FormEvent<HTMLInputElement>){
    this.setState({username: event.currentTarget.value})
}

handlePWDInput(event:React.FormEvent<HTMLInputElement>){
    this.setState({pwdHash: event.currentTarget.value})
}

handleHasesstIdInput(event:React.FormEvent<HTMLInputElement>){
    this.setState({comment_hanesst_id: event.currentTarget.valueAsNumber})
}

handleCommentInput(event:React.FormEvent<HTMLInputElement>){  
  this.setState({post_text: event.currentTarget.value})
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



  handleSubmit = async ( e: React.FormEvent<HTMLFormElement>):Promise<void> => {
      e.preventDefault();
      console.log("commentText "+this.state.post_text)
      console.log("hanID "+this.state.comment_hanesst_id)
      console.log("postID "+this.state.postId)
      console.log("pwd "+this.state.pwdHash)
      console.log("username "+this.state.username)

      /*This works!
      Need to change a small thing in the backend, so that the "GetPost" also returns the posts hanesst_id, 
      since this is the ID we need in order to attach new comments too!
      */
      postNewComment("Christian", "Olsen", "DIABLO IMMORTAL WILL SUCK!!!", 1, 666).then(res => {
        console.log(res);
        });

      if(this.state.username|| this.state.pwdHash || this.state.post_text || this.state.postId || this.state.comment_hanesst_id){
         //@ts-ignore
      /*postNewComment(this.state.username, this.state.pwdHash, this.state.newComment, this.state.postId, this.state.hanesst_id).then(res => {
        console.log(res);
        });
        */
        alert("Your comment was successfully posted!");
      } else {
        alert("Something went wrong! Did you fill out all the inputs?");
      }
     
  }

  newComment(){
    return(
      <div>
      <h2>New Comment</h2>
      <h4>Comment Text</h4>
      <form  onSubmit={this.handleSubmit}>
        <label htmlFor="test" >
          <input  
           type="text"
           style={{width:"75%", height: "25px", lineHeight:"1.5em", marginBottom:"20px", display: "inline-block"}} 
           value={this.state.post_text}
           onChange={e => this.handleCommentInput(e)} />

          <h4>Hanesst ID</h4>
          <input  
           type="number"
           style={{width:"75%", height: "25px", lineHeight:"1.5em", marginBottom:"20px", display: "inline-block"}} 
           value={this.state.comment_hanesst_id}
           onChange={e => this.handleHasesstIdInput(e)} />

        <h2>User Information</h2>
        <h4>User Name</h4>
         <input  
           type="text"
           style={{width:"75%", height: "25px", lineHeight:"1.5em", marginBottom:"20px", display: "inline-block"}} 
           value={this.state.username} 
           onChange={e => this.handleUserNameInput(e)} />

        <h4>Password</h4>
         <input  
           type="text"
           style={{width:"75%", height: "25px", lineHeight:"1.5em", marginBottom:"20px", display: "inline-block"}} 
           value={this.state.pwdHash} 
           onChange={e => this.handlePWDInput(e)} />
         </label>
         <br/>

         


         <input type="submit" 
         value="Submit Comment" 
         //disabled={!this.state.username|| !this.state.pwdHash || !this.state.newComment || !this.state.postId || !this.state.hanesst_id}
         />
      </form>


      </div>
    )
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
        {this.newComment()}
       
        
      </div>
    );
  }
}
