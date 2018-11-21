import * as React from 'react';
import Comment from '../components/Comment';
import { getCommentsFromPostId, getPostById, postNewCommentNonHelge } from '../api/DataHandler';
import { RealComment } from 'src/types/realcomment';
import store from 'src/store/Store';

interface PostState {
  postId: number | undefined,
  postContent: string | undefined,
  postUrl: string | undefined,
  postKarma: number | undefined,
  comments: Array<RealComment> | undefined,
  post_text: string | undefined
}

export default class PostScreen extends React.Component<any, PostState>{

  state = {
    postId: undefined,
    postContent: undefined,
    postUrl: undefined,
    postKarma: undefined,
    comments: [],
    post_text: undefined
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
      getCommentsFromPostId(this.state.postId).then(data => {
        //@ts-ignore
        this.setState({ comments: data });
      });
    }
  }

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    //@ts-ignore
    postNewCommentNonHelge(store.user.id, this.state.postId, this.state.post_text).then(res => {
      this.getComments();
    }).catch((err: any) =>
      alert(`${err}`));
  }

  addNewComment() {
    return (
      <div>
        <h2>Add New Comment</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              placeholder="Write comment here..."
              type="text"
              style={{ width: "75%", height: "25px", lineHeight: "1.5em", marginBottom: "20px", display: "inline-block" }}
              onClick={() => store.user === undefined ? alert("You have to login to comment on posts!") : null}
              onChange={e => this.handleCommentInput(e)} />
          </label>
          <br />
          <input type="submit"
            value="Submit Comment"
            disabled={!store.user || !this.state.post_text}
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
        <p><a href={this.state.postUrl}>{this.state.postUrl}</a></p>
        <div>{comments}</div>
        {this.addNewComment()}
      </div>
    );
  }
}
