import * as React from 'react';
import HeaderBar from './components/HeaderBar';
import MainScreen from './screens/MainScreen';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Login from './screens/Login';
import Register from './screens/Register';
import ResetPassword from './screens/ResetPassword';
import PostScreen from './screens/PostScreen';
import NewPostScreen from './screens/NewPostScreen';


class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <Route path="/" component={HeaderBar} />
                    <Route exact path="/" component={MainScreen} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/resetPassword" component={ResetPassword} />
                    <Route path="/post" component={PostScreen} />
                    <Route exact path="/newpost" component={NewPostScreen} />
                </div>
            </Router>
        )

    }

}

export default App;
