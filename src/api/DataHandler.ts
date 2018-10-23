import fetch from 'node-fetch';

const api = "localhost:3306" //"80.167.223.178";

enum HttpRequestType {
    Get,
    Post
}
//@ts-ignore
function login(email: string, password: string){
    return new Promise((resolve, rejects) => {
        fetch(api, {
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
//@ts-ignore
function register(username: string, email: string, password: string){
    return new Promise((resolve, rejects) => {
        fetch(api, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                username: username,
                password: password
            }),
        }).then(response => resolve(response)).catch(err => rejects(err));
    });
}
//@ts-ignore
function forgotPassword(email: string){
    return new Promise((resolve, rejects) => {
        fetch(api, {
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


async function fetchData(url: string, requestType: HttpRequestType, bodyData?: string | object) {
    let settings: RequestInit = {
        method: (requestType === HttpRequestType.Get ? 'GET' : 'POST')
    }
    settings.body = (bodyData ? (typeof(bodyData) === 'object' ? JSON.stringify(bodyData) : bodyData) : undefined);
    
    //@ts-ignore
    const data = await fetch(`${IP}/new`, settings).catch((err) => {
        console.log(`An error ocurred!: ${JSON.stringify(err)}`);
    });
    console.log(data);
}

export function createNewPost(post: object) {
    fetchData(api, HttpRequestType.Post, post);
}