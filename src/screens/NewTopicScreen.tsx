import * as React from 'react';
import { postNewTopic}from '../api/DataHandler';

//import { Link } from 'react-router-dom'

interface NewTopicState{
    post_title: string,
    post_text: string,
    post_url: string,
    username: string,
    pwdHash: string,
    hanesst_id: number,
}
class NewTopicScreen extends React.Component<any, NewTopicState> {

state = {
    post_title: "",
    post_text: "",
    post_url: "",
    username: "",
    pwdHash: "",
    hanesst_id: 0
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
    this.setState({pwdHash: event.currentTarget.value})
}

handleHasesstIdInput(event:React.FormEvent<HTMLInputElement>){
    this.setState({hanesst_id: event.currentTarget.valueAsNumber})
}


  
handleNewTopicSubmit = async ( e: React.FormEvent<HTMLFormElement>):Promise<void> => {
        e.preventDefault();
        if(this.state.hanesst_id <= 0  ){
            alert("hanesst id can't be equal to or below 0!")
        } else if(!this.state.username || this.state.username.length <= 3){
            alert("Username must be at least 3 chars long")
        } else if(!this.state.pwdHash || this.state.pwdHash.length <= 3){
            alert("Password must be at least 3 chars long")
        } 
        else {
            postNewTopic(this.state.username,this.state.pwdHash,this.state.post_title, this.state.post_url, this.state.post_text, this.state.hanesst_id).then(res => {
                console.log(res);
            });
        }
    }

public render(){
    return(
        <div>
            <h1>Welcome to the new Topic Screen!</h1>

                
                <form  onSubmit={this.handleNewTopicSubmit}>
                <label htmlFor="test" >
                
                <h2>Topic/Post Information</h2>   
                <h4>New Topic Title</h4>
                    <input  
                    type="text"
                    style={{width:"75%", height: "25px", lineHeight:"1.5em", marginBottom:"20px", display: "inline-block"}} 
                    value={this.state.post_title} 
                    className="name" 
                    onChange={e => this.handlePostTitleInput(e)} />
                    <br/>
                
                <h4>Topic URL</h4>
                    <input 
                    type="text"
                    style={{width:"75%", height: "25px", lineHeight:"1.5em", marginBottom:"20px", display: "inline-block"}} 
                    value={this.state.post_url}
                    onChange={e => this.handlePostUrlInput(e)}
                    />

                <h4>Topic Text</h4>
                    <input 
                    type="text"
                    style={{width:"75%", height: "25px", lineHeight:"1.5em", marginBottom:"20px", display: "inline-block"}} 
                    value={this.state.post_text}
                    onChange={e => this.handlePostTextInput(e)}
                    />
                </label>
                <br/>

                <h4>Hanesst ID</h4>
                    <input  
                    type="number"
                    style={{width:"75%", height: "25px", lineHeight:"1.5em", marginBottom:"20px", display: "inline-block"}} 
                    value={this.state.hanesst_id} 
                    
                    onChange={e => this.handleHasesstIdInput(e)} />
                    <br/>   

                <h2>User Info</h2>
                <h4>Username</h4>
                    <input  
                    type="text"
                    style={{width:"75%", height: "25px", lineHeight:"1.5em", marginBottom:"20px", display: "inline-block"}} 
                    value={this.state.username} 
                    
                    onChange={e => this.handleUserNameInput(e)} />
                    <br/>

                <h4>Password</h4>
                    <input  
                    type="text"
                    style={{width:"75%", height: "25px", lineHeight:"1.5em", marginBottom:"20px", display: "inline-block"}} 
                    value={this.state.pwdHash} 
                    
                    onChange={e => this.handlePWDInput(e)} />
                    <br/>
            
                <input type="submit" 
                disabled={!this.state.username || !this.state.pwdHash || !this.state.post_title || !this.state.post_url || !this.state.post_text} 
                value="Create New Topic"/>
                </form>

        </div>
        )
    }


}

export default NewTopicScreen