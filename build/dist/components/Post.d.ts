import * as React from 'react';
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
}
interface timeObject {
    milli: number;
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
}
export default class Post extends React.Component<PostProps> {
    upvoteMargin: (xOffset: number) => void;
    upvote: (e: any) => void;
    extractDomain: (url: string) => string;
    formatTime: (milliseconds: number) => timeObject;
    getTime: (timeFormat: timeObject) => string;
    render(): JSX.Element;
}
export {};
