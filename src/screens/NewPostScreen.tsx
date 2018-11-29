import * as React from 'react';
import { postNewPostNonHelge } from '../api/DataHandler';
import store from 'src/store/Store';

interface NewPostState {
    post_title: string | undefined,
    post_text: string | undefined,
    post_url: string | undefined,
}

class NewPostScreen extends React.Component<any, NewPostState> {

    state = {
        post_title: undefined,
        post_text: undefined,
        post_url: undefined
    }

    handlePostTitleInput(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ post_title: event.currentTarget.value })
    }

    handlePostTextInput(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ post_text: event.currentTarget.value })
    }

    handlePostUrlInput(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ post_url: event.currentTarget.value })
    }

    handleNewPostSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        //@ts-ignore
        postNewPostNonHelge(store.user.id, this.state.post_title, this.state.post_url, this.state.post_text).then(res => {
            alert("Your post was successfully created!");
            this.props.history.push("/");
        }).catch((err: any) =>
            alert(`${err}`))
    }

    newPost() {
        return (
            <div>
                <h1>Welcome to the new Post Screen!</h1>
                <form onSubmit={this.handleNewPostSubmit}>
                    <label>
                        <h2>Post Information</h2>
                        <p>
                            <input
                                type="text"
                                placeholder="Type post title here..."
                                style={{ width: "75%", height: "25px", lineHeight: "1.5em", marginBottom: "20px", display: "inline-block" }}
                                className="name"
                                onClick={() => store.user === undefined ? alert("You have to login to create new posts!") : null}
                                onChange={e => this.handlePostTitleInput(e)} />
                        </p>
                        <p>
                            <input
                                type="text"
                                placeholder="Type post URL here..."
                                style={{ width: "75%", height: "25px", lineHeight: "1.5em", marginBottom: "20px", display: "inline-block" }}
                                onChange={e => this.handlePostUrlInput(e)}
                            />
                        </p>
                        <p>
                            <input
                                type="text"
                                placeholder="Type post text here..."
                                style={{ width: "75%", height: "25px", lineHeight: "1.5em", marginBottom: "20px", display: "inline-block" }}
                                onChange={e => this.handlePostTextInput(e)}
                            />
                        </p>
                    </label>
                    <input type="submit"
                        disabled={!store.user || !this.state.post_title || !this.state.post_url || !this.state.post_text}
                        value="Create New Post" />
                </form>
            </div>
        )
    }

    public render() {
        return (
            <div>
                {this.newPost()}
            </div>
        )
    }
}

export default NewPostScreen