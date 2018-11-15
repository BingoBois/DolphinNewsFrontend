import * as React from 'react';
import '../stylesheets/loginStyle.css';
import { Link } from 'react-router-dom'
import Store from '../store/Store'

interface userInfo {
    username: string | undefined,
    password: string | undefined
}

class Login extends React.Component<any, userInfo> {

    state = {
        username: undefined,
        password: undefined
    }

    login() {
        //@ts-ignore
        Store.loginUser(this.state.username, this.state.password)
        this.props.history.push("/")
    }

    handleUserName(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ username: event.currentTarget.value })
    }

    handlePassword(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ password: event.currentTarget.value })
    }

    public render() {

        return (
            <div className="login-page">
                <div className="form">
                    <div className="register-form">
                        <input type="text" placeholder="name" />
                        <input type="password" placeholder="password" />
                        <input type="text" placeholder="email address" />
                        <button>create</button>
                        <p className="message">Already registered? <a href="#">Sign In</a></p>
                    </div>
                    <div className="login-form">
                        <input type="text" name="username" placeholder="username" onChange={(e) => this.handleUserName(e)} />
                        <input type="password" name="password" placeholder="password" onChange={(e) => this.handlePassword(e)} />
                        <button onClick={() => {
                            this.login()
                        }}>Login</button>
                        <p className="message textContainer"> Not Registered? <Link to="/register">Create an account!</Link></p>
                        <p className="message textMargin">Forgot Password? <Link to="/resetPassword">Reset Password</Link></p>
                    </div>
                </div>
            </div>
        );
    }

}

export default Login;
