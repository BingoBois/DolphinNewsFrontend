import * as React from 'react';
import Comment from '../components/Comment';
import { getCommetsFromPostId, getPostById, postNewCommentNonHelge } from '../api/DataHandler';
import { RealComment } from 'src/types/realcomment';
import store from 'src/store/Store';

interface PostState {
  postId: number | undefined,
  postContent: string | undefined,
  postUrl: string | undefined,
  postKarma: number | undefined,
  comments: Array<RealComment> | undefined,
  post_text: string | undefined
  // username: string | undefined
  // password: string | undefined
}

export default class PostScreen extends React.Component<any, PostState>{

  state = {
    postId: undefined,
    postContent: undefined,
    postUrl: undefined,
    postKarma: undefined,
    comments: [],
    post_text: undefined,
    // username: undefined,
    // password: undefined
  }

  componentWillMount() {
    this.setState({
      postId: parseInt(window.location.href.split('/')[4]),
    }, () => {
      this.getComments()
      this.getPost()
    });
  }

  handleCommentInput(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ post_text: event.currentTarget.value })
  }

  getPost() {
    if (this.state.postId) {
      //@ts-ignore
      getPostById(this.state.postId).then((data) => {
        //@ts-ignore
        this.setState({ postContent: data[0].post_text, postUrl: data[0].post_url, postKarma: 85 });
      });
    }
  }

  getComments() {
    if (this.state.postId) {
      //@ts-ignore
      getCommetsFromPostId(this.state.postId).then((data) => {
        //@ts-ignore
        this.setState({ comments: data });
        //@ts-ignore
        this.setState({ post_hanesst_id: data[0].hanesst_id })
      });
    }
  }

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (store.user === undefined) {
      alert("You have to login to comment on posts!");
      // alert("Something went wrong! Did you fill out all the inputs?");
    } else {
      //@ts-ignore  
      postNewCommentNonHelge(store.user.id, this.state.postId, this.state.post_text).then(res => {
        alert("Your comment was successfully posted! Please refresh the page to see it!");
      }).catch((err: any) =>
        alert(`${err}`));
    }
  }

  newComment() {
    return (
      <div>
        <h2>New Comment</h2>
        <h4>Comment Text</h4>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="test" >
            <input
              type="text"
              style={{ width: "75%", height: "25px", lineHeight: "1.5em", marginBottom: "20px", display: "inline-block" }}
              value={this.state.post_text}
              onChange={e => this.handleCommentInput(e)} />
          </label>
          <br />
          <input type="submit"
            value="Submit Comment"
            disabled={!store.user || !this.state.post_text || !this.state.postId}
          />
        </form>
      </div>
    )
  }

  render() {
    const comments = this.state.comments.map((comment: RealComment) => {
      return (<Comment key={comment.id} content={comment.content} karma={comment.karma} time={comment.time} fk_user={comment.fk_user} username={comment.username} id={comment.id} />);
    });

    return (
      <div>
        <p>^{this.state.postKarma} | {this.state.postContent} | Post ID: {this.state.postId}</p>
        <p><a href={this.state.postUrl}>{this.state.postUrl}</a></p>
        <div>{comments}</div>
        {this.newComment()}
      </div>
    );
  }
}
