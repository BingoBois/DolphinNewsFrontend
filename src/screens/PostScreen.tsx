import * as React from 'react';
import Comment from '../components/Comment';

interface PostState {
  postId: number | undefined,
  postKarma: number | undefined
}

export default class PostScreen extends React.Component<any, PostState>{
  state = {
    postId: undefined,
    postKarma: undefined
  }

  componentWillMount(){
    this.setState({
      postId: parseInt(window.location.href.split('/')[4]),
    });
  }

  render(){
    return(
      <div>
        <p><b>Post Screen</b></p>
        <p>{this.state.postId}</p>
        <p>{this.state.postKarma}</p>
        <Comment/>
      </div>
    );
  }
}
