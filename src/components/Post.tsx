import * as React from 'react';
import { Link }  from 'react-router-dom';
import '../stylesheets/rowStyles.css';

interface PostProps {
    title: string;
    index: number;
    url: string;
    upvotes: number;
    id: number;
    user: string;
    time: string;
    commentCount: number;
    postText: string;
}

interface timeObject {
    milli: number;
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
}

export default class Post extends React.Component<PostProps> {

    upvoteMargin = (xOffset: number) => {
        const element: any = this.refs[`upvotes${this.props.id}`];
        element.style.paddingLeft = 140;
    }

    upvote = (e: any) => {
        if (!e.target.classList.contains("clickedArrow")) {
            e.target.classList.remove("upvoteArrow");
            e.target.classList.add("clickedArrow");
        } else {
            e.target.classList.remove("clickedArrow");
            e.target.classList.add("upvoteArrow");
        }
    }

    extractDomain = (url: string): string => {
        if (url.includes('www.')) {
            url = url.substring(url.indexOf('www.') + 4);
        }
        if (url.includes('//')) {
            url = url.substring(url.indexOf('//') + 2);
        }
        if (url.includes('/')) {
            url = url.substring(0, url.indexOf('/'));
        }
        return url;
    }

    formatTime = (milliseconds: number): timeObject => {
        let seconds = Math.floor(milliseconds / 1000);
        milliseconds -= (seconds * 1000);
        
        let minutes = Math.floor(seconds / 60);
        seconds -= (minutes * 60);

        let hours = Math.floor(minutes / 60);
        minutes -= (hours * 60);
        
        let days = Math.floor(hours / 24);
        hours -= (days * 24);

        return {
            milli: milliseconds,
            seconds: seconds,
            minutes: minutes,
            hours: hours,
            days: days
        };
    }

    getTime = (timeFormat: timeObject) => {
        const timeNames = ["seconds", "minutes", "hours", "days"].reverse();
        for (let i = 0; i < timeNames.length; i++) {
            const value = timeNames[i];
            if (timeFormat[value] > 1) {
                return `${timeFormat[value]} ${value} ago`;
            } else if (timeFormat[value] > 0) {
                return `${timeFormat[value]} ${value.substring(0, value.length - 1)} ago`;
            }
        }
        return `0`;
    }

    render() {
        return (
            <div className="dataRow">
                <div className="mainRow">
                    <p className="rowNumber" ref={`rowNumber${this.props.id}`}>{this.props.index}.</p>
                    <img className="upvoteArrow" src={require('../assets/green_arrow.png')} onClick={(e) => this.upvote(e)}/>
                    <p className="rowText" ref={`rowText${this.props.id}`}>{this.props.title}</p>
                    <p className="urlText">({this.extractDomain(this.props.url)})</p>
                    </div>
                <div className="minorRow">
                    <p className="upvotes" ref={`upvotes${this.props.id}`} style={{}}>{this.props.upvotes} points by</p>
                    <p className="userText">{this.props.user}</p>
                    <p className="timeText">{this.getTime(this.formatTime(new Date().getTime() - new Date(this.props.time).getTime()))}</p>
                    <p className="rowDivider unselectable">|</p>
                    <p className="userText">hide</p>
                    <p className="rowDivider unselectable">|</p>
                    <Link to={`/post/${this.props.id}`} className="commentText"><p className="userText" >{`${this.props.commentCount} comments`}</p></Link>
                </div>
            </div>
        )
    }

}
