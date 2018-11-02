import * as React from 'react';
import { RealComment } from 'src/types/realcomment';

export default class Comment extends React.Component<RealComment,any>{
  upvote(e: any){
    console.log('tro paa det' + e);
  }

  render(){
    return(
      <div className="dataRow">
          <div className="mainRow">
              <p className="rowNumber" ref={`rowNumber${this.props.id}`}>{this.props.karma}.</p>
              <img className="upvoteArrow" src={require('../assets/green_arrow.png')} onClick={(e) => this.upvote(e)}/>
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
