import fetch from 'node-fetch';
import UserObject from '../types/user';

const API_URL = "http://80.240.24.203:3000" //"80.167.223.178";

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

export function getAllPosts(){
    return new Promise((resolve, rejects) => {
        fetch("http://localhost:3001/post/get/All")
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => rejects(err));
    });
}

/*
export function createNewPost(post: object) {
    fetchData(API_URL, HttpRequestType.Post, post);
}
*/
