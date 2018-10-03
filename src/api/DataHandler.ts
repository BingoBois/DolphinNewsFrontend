import fetch from 'node-fetch';

const IP = "http://localhost:8081" //"80.167.223.178";

enum HttpRequestType {
    Get,
    Post
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
    fetchData(IP, HttpRequestType.Post, post);
}