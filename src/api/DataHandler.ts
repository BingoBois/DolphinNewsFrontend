import fetch from 'node-fetch';
import UserObject from '../types/user';
import { PostObject } from 'src/types/post';
import { CommentObject } from 'src/types/comment';


const API_URL = "http://83.88.66.128:3333" //"80.167.223.178";
//const LOCAL_URL = "http://localhost:3000";

enum HttpRequestType {
    Get,
    Post
}

export function login(email: string, password: string){
    return new Promise((resolve, rejects) => {
        fetch(API_URL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
        }).then(response => resolve(response)).catch(err => rejects(err));
    });
}

interface tempResponse {
    message: string;
}

export function register(username: string | undefined, email: string | undefined, password: string | undefined) {
    if (!username) {
        throw new Error("Username cannot be empty");
    } else if (!email) {
        throw new Error("Email cannot be empty");
    } else if (!password) {
        throw new Error("Password cannot be empty");
    }
    const newUser: UserObject = {
        email: email,
        karma: 0,
        password: password,
        role: "member",
        username: username
    }
    console.log(newUser);
    fetchData('auth/register', HttpRequestType.Post, JSON.stringify(newUser)).then((response) => {
        response.json().then((data) => {
            let resp = <tempResponse> data;
            console.log(resp.message);
        })
    }).catch((err) => {
        console.log(err);
    });
}

export function getPosts(index: number, amount: number){
    return new Promise((resolve, rejects) => {
        fetch('http://83.88.66.128:3333/post/getPosts',{ 
            method: 'POST',
            body:    JSON.stringify({
                index: index,
                amount: amount
            }),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => resolve(res.json()))
    });
}

export function getCommentAmount(postId: number){
    return new Promise((resolve, rejects) => {
        fetch('http://83.88.66.128:3333/post/getCommentAmount',{ 
            method: 'POST',
            body:    JSON.stringify({
                postId: postId
            }),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => resolve(res.json()))
    });
}

export function getVotesAmounts(postId: number){
    return new Promise((resolve, rejects) => {
        fetch('http://83.88.66.128:3333/post/getVotes',{ 
            method: 'POST',
            body:    JSON.stringify({
                postId: postId
            }),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => resolve(res.json()))
    });
}
       
/*

TODO

export function forgotPassword(email: string) {
    return new Promise((resolve, rejects) => {
        fetch(API_URL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
            }),
        }).then(response => resolve(response)).catch(err => rejects(err));
    });
}

*/


export function fetchData(url: string, requestType: HttpRequestType, bodyData?: string): Promise<Response> {
    return new Promise((resolve, reject) => {
        const method = (requestType === HttpRequestType.Get ? 'GET' : 'POST');
        const options = {
            method: method,
            headers: (method === 'POST' ? {
                'Content-Type': 'application/json'
            } : undefined),
            body: bodyData ? bodyData : undefined
        }
        fetch(`${API_URL}/${url}`, options).then((value) => {
            return value;
        }).catch((err) => {
            reject(err);
        });
    })

}


export function getPostById(postId: number): Promise<Array<PostObject>>{
    return new Promise((resolve, rejects) => {
        fetch( API_URL+ `/post/get/byid/${postId}`)
        .then(response => response.json())
        .then(data => resolve(JSON.parse(data)))
        .catch(err => rejects(err));
    });
}


export function getAllPosts(): Promise<Array<PostObject>>{
    return new Promise((resolve, rejects) => {
        fetch( API_URL+ "/post/get/All")
        .then(response => response.json())
        .then(data => resolve(JSON.parse(data)))
        .catch(err => rejects(err));
    });
}

export function getCommetsFromPostId(postId: number): Promise<Array<PostObject>>{
    return new Promise((resolve, rejects) => {
        fetch( API_URL+ `/comment/get/bypost/${postId}`)
        .then(response => response.json())
        .then(data => resolve(JSON.parse(data)))
        .catch(err => rejects(err));
    });
}

export function getAllPostVotes(): Promise<Array<PostObject>>{
    return new Promise((resolve, rejects) => {
        fetch( API_URL + "/post/get/all/postwithvotes")
        .then(response => response.json())
        .then(data => resolve(JSON.parse(data)))
        .catch(err => rejects(err));
    });
}

export function getAmountofCommentsInPost(): Promise<Array<PostObject>>{
    return new Promise((resolve, rejects) => {
        fetch( API_URL + "/post/get/all/commentamount")
        .then(response => response.json())
        .then(data => resolve(JSON.parse(data)))
        .catch(err => rejects(err));
    });
}

export function getAllCommentsWithVote(): Promise<Array<CommentObject>>{
    return new Promise((resolve, rejects) => {
        fetch( API_URL + "/comment/get/all/withvote")
        .then(response => response.json())
        .then(data => resolve(JSON.parse(data)))
        .catch(err => rejects(err));
    });
}

export function getAllComments(): Promise<Array<CommentObject>>{
    return new Promise((resolve, rejects) => {
        fetch(API_URL+ "/comment/get/all")
        .then(response => response.json())
        .then(data => resolve(JSON.parse(data)))
        .catch(err => rejects(err));
    });
}




/*
export function createNewPost(post: object) {
    fetchData(API_URL, HttpRequestType.Post, post);
}
*/
