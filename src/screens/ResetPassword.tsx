import * as React from 'react';
import '../stylesheets/loginStyle.css';
import { Link } from 'react-router-dom'

class ResetPassword extends React.Component {

    public render() {

        return (
            <div className="login-page">
                <div className="form">
                    <div className="login-form">
                        <input type="text" placeholder="Email" />
                        <button>Reset Password</button>
                        <p className="message textMargin">Didn't forget your password? <Link to="/login">Back to Login</Link></p>

                    </div>
                </div>
            </div>
        );
    }

}

export default ResetPassword;