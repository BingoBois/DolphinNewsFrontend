import * as React from 'react';
import '../stylesheets/loginStyle.css';
import { Link } from 'react-router-dom'
import Store from '../store/Store'
class Login extends React.Component<any, any> {

    // made for test purposes since no endpoint is being served
    login(){
        Store.token = "asdb22222";
        this.props.history.push("/")
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
                        <input type="text" placeholder="username" />
                        <input type="password" placeholder="password" />
                        <button onClick={() => this.login()}>login</button>
                        <p className="message textContainer"> Not Registered? <Link to="/register">Create an account!!</Link></p>
                        <p className="message textMargin">Forgot Password? <Link to="/resetPassword">Reset Password</Link></p>

                    </div>
                </div>
            </div>
        );
    }

}

export default Login;
