import * as React from 'react';
import { RealComment } from 'src/types/realcomment';
import { observer } from 'mobx-react';
import Store from 'src/store/Store';
import { voteComment, unvoteComment } from 'src/api/DataHandler';

@observer
export default class Comment extends React.Component<RealComment, any>{

  async componentWillMount() {
    await Store.getAllVotedCommentIdsByUser();
  }

  upvote = (e: any) => {
    if (Store.user === undefined) {
      alert("You have to login to upvote comments!")
    } else {
      const userId = Store.user.id;
      const commentId = this.props.id;
      if (!e.target.classList.contains("clickedArrow")) {
        e.target.classList.remove("upvoteArrow");
        e.target.classList.add("clickedArrow");
        //@ts-ignore
        voteComment(userId, commentId);
      } else {
        e.target.classList.remove("clickedArrow");
        e.target.classList.add("upvoteArrow");
        //@ts-ignore
        unvoteComment(userId, commentId);
      }
    }
  }

  render() {
    return (
      <div className="dataRow">
        <div className="mainRow">
          <p className="rowNumber" ref={`rowNumber${this.props.id}`}>{this.props.karma}.</p>
          {Store.user && Store.user.votedCommentIds && Store.user.votedCommentIds.includes(this.props.id) ? <img className="clickedArrow" src={require('../assets/green_arrow.png')} onClick={(e) => this.upvote(e)} /> : <img className="upvoteArrow" src={require('../assets/green_arrow.png')} onClick={(e) => this.upvote(e)} />}
          <p className="rowText" ref={`rowText${this.props.id}`}>{this.props.content}</p>
        </div>
        <div className="minorRow">
          <p className="upvotes" ref={`upvotes${this.props.id}`} style={{}}></p>
          <p className="userText">{this.props.username}</p>
          <p className="timeText">{this.props.time}</p>
          <p className="rowDivider unselectable">|</p>
        </div>
      </div>
    );
  }
}
