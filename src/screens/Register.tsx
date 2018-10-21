import * as React from 'react';
import '../stylesheets/loginStyle.css';
import { Link } from 'react-router-dom'
import { register } from '../api/DataHandler';

interface RegisterState {
    username: string | undefined;
    email: string | undefined;
    password: string | undefined;
    error: string | undefined;
}

class Register extends React.Component<any, RegisterState> {

    state = {
        username: undefined,
        email: undefined,
        password: undefined,
        error: undefined
    }

    getTargetValue = (e: React.ChangeEvent) => {
        //@ts-ignore
        return e.target.value;
    } 

    handleUsername = (e: React.ChangeEvent) => {
        this.setState({username: this.getTargetValue(e)});
    }

    handleEmail = (e: React.ChangeEvent) => {
        this.setState({email: this.getTargetValue(e)});
    }

    handlePassword = (e: React.ChangeEvent) => {
        this.setState({password: this.getTargetValue(e)});
    }

    public render() {

        return (
            <div className="login-page">
                <div className="form">
                    <div className="login-form">
                        <input type="text" placeholder="username" onChange={(e) => this.handleUsername(e)} />
                        <input type="text" placeholder="email" onChange={(e) => this.handleEmail(e)} />
                        <input type="password" placeholder="password" onChange={(e) => this.handlePassword(e)} />
                        <button onClick={() => {
                            try {
                                register(this.state.username, this.state.email, this.state.password);
                            } catch (err) {
                                //@ts-ignore
                                this.setState({error: err.message}, () => {
                                    setTimeout(() => {
                                        this.setState({error: undefined});
                                    }, 2000)
                                });
                            }
                        }}>Register</button>
                        <p className="message textContainer"> Already got an account? <Link to="/login">Login</Link></p>
                        <p style={{color: 'red'}}>{this.state.error ? this.state.error : ""}</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default Register;
