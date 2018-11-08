import * as React from 'react';
import { postNewStoryNonHelge}from '../api/DataHandler';


//import { Link } from 'react-router-dom'

interface NewTopicState{
    post_title: string | undefined,
    post_text: string | undefined,
    post_url: string | undefined,
    username: string | undefined,
    password: string | undefined
}
class NewTopicScreen extends React.Component<any, NewTopicState> {

state = {
    post_title: undefined,
    post_text: undefined,
    post_url: undefined,
    username: undefined,
    password: undefined
}

    
handlePostTitleInput(event:React.FormEvent<HTMLInputElement>){
    this.setState({post_title: event.currentTarget.value})
}

handlePostTextInput(event:React.FormEvent<HTMLInputElement>){
    this.setState({post_text: event.currentTarget.value})
}

handlePostUrlInput(event:React.FormEvent<HTMLInputElement>){
    this.setState({post_url: event.currentTarget.value})
}

handleUserNameInput(event:React.FormEvent<HTMLInputElement>){
    this.setState({username: event.currentTarget.value})
}

handlePWDInput(event:React.FormEvent<HTMLInputElement>){
    this.setState({password: event.currentTarget.value})
}



  
handleNewTopicSubmit = async ( e: React.FormEvent<HTMLFormElement>):Promise<void> => {
        e.preventDefault();
        //@ts-ignore
        if(!this.state.username || this.state.username.length <= 3){
            alert("Username must be at least 3 chars long")
            //@ts-ignore
        } else if(!this.state.password || this.state.password.length <= 3){
            alert("Password must be at least 3 chars long")
        } 
        else {
            //@ts-ignore
            postNewStoryNonHelge(this.state.username,this.state.password,this.state.post_title, this.state.post_url, this.state.post_text).then(res => {
                console.log(res);
                alert("Your story was successfully posted!");
            }).catch((err:any) => 
            alert(`${err}`))
        }
    }

 

    newStory(){
        return(
            <div>

                <h1>Welcome to the new Topic Screen!</h1>

                                
                <form  onSubmit={this.handleNewTopicSubmit}>
                <label htmlFor="test" >

                
                <h2>Topic/Post Information</h2>   
                <h4>New Topic Title</h4>
                <p>
                    <input  
                    type="text"
                    style={{width:"75%", height: "25px", lineHeight:"1.5em", marginBottom:"20px", display: "inline-block"}} 
                    value={this.state.post_title} 
                    className="name" 
                    onChange={e => this.handlePostTitleInput(e)} />
                    
                </p>

                
                <h4>Topic URL</h4>
                <p>
                    <input 
                    type="text"
                    style={{width:"75%", height: "25px", lineHeight:"1.5em", marginBottom:"20px", display: "inline-block"}} 
                    value={this.state.post_url}
                    onChange={e => this.handlePostUrlInput(e)}
                    />
                </p>

                
                <h4>Topic Text</h4>
                <p>
                    <input 
                    type="text"
                    style={{width:"75%", height: "25px", lineHeight:"1.5em", marginBottom:"20px", display: "inline-block"}} 
                    value={this.state.post_text}
                    onChange={e => this.handlePostTextInput(e)}
                    />
                </p>
                </label>

                
                
                <h2>User Info</h2>
                <h4>Username</h4>
                <p>
                    <input  
                    type="text"
                    style={{width:"75%", height: "25px", lineHeight:"1.5em", marginBottom:"20px", display: "inline-block"}} 
                    value={this.state.username} 
                    
                    onChange={e => this.handleUserNameInput(e)} />
                </p>

                
                <h4>Password</h4>
                <p>
                    <input  
                    type="password"
                    style={{width:"75%", height: "25px", lineHeight:"1.5em", marginBottom:"20px", display: "inline-block"}} 
                    value={this.state.password} 
                    
                    onChange={e => this.handlePWDInput(e)} />
                </p>

                <input type="submit" 
               disabled={!this.state.username || !this.state.password || !this.state.post_title || !this.state.post_url || !this.state.post_text} 
                value="Create New Topic"/>
                </form>

            </div>
        )
    }

public render(){
    return(
        <div>
            {this.newStory()}

        </div>
        )
    }


}

export default NewTopicScreen