import * as React from 'react';
//import { Link } from 'react-router-dom'

interface NewTopicState{
    post_title: string,
    post_text: string,
    post_url: string

}

class NewTopicScreen extends React.Component<any, NewTopicState> {

    state = {
        post_title: "",
        post_text: "",
        post_url: ""
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
  
handleNewTopicSubmit = async ( e: React.FormEvent<HTMLFormElement>):Promise<void> => {
        e.preventDefault();
        console.log("Title: " + this.state.post_title)
        console.log("Text: " + this.state.post_text)
        console.log("Url: " + this.state.post_url)

    }

    public render(){
        return(
            <div>
                <h1>Welcome to the new Topic Screen!</h1>

        
        <form  onSubmit={this.handleNewTopicSubmit}>
          <label htmlFor="test" >
          <h4>New Topic Title</h4>
             <input  
             style={{width:"75%", height: "25px", lineHeight:"1.5em", marginBottom:"20px", display: "inline-block"}} 
             value={this.state.post_title} 
             className="name" 
             onChange={e => this.handlePostTitleInput(e)} />
             <br/>
             <h4>Topic URL</h4>
             <input 
             style={{width:"75%", height: "25px", lineHeight:"1.5em", marginBottom:"20px", display: "inline-block"}} 
             value={this.state.post_url}
             onChange={e => this.handlePostUrlInput(e)}
             />
             <h4>Topic Text</h4>
             <input 
             style={{width:"75%", height: "25px", lineHeight:"1.5em", marginBottom:"20px", display: "inline-block"}} 
             value={this.state.post_text}
             onChange={e => this.handlePostTextInput(e)}
             />
        
             
           </label>
           <br/>
           
           <input type="submit" value="Create New Topic"/>
        </form>
            </div>
        )
    }


}

export default NewTopicScreen