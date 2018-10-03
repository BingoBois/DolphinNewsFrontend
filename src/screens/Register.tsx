import * as React from 'react';
import '../stylesheets/loginStyle.css';
import { Link } from 'react-router-dom'

class Register extends React.Component {

    public render() {

        return (
            <div className="login-page">
                <div className="form">
                    <div className="login-form">
                        <input type="text" placeholder="username" />
                        <input type="text" placeholder="email" />
                        <input type="password" placeholder="password" />
                        <button>Register</button>
                        <p className="message textContainer"> Already got an account? <Link to="/login">Login</Link></p>

                    </div>
                </div>
            </div>
        );
    }

}

export default Register;