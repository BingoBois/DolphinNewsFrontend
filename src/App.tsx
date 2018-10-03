import * as React from 'react';
import HeaderBar from './components/HeaderBar';
import MainScreen from './screens/MainScreen';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Login from './screens/Login';
import Register from './screens/Register';

class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <Route path="/" component={HeaderBar} />
                    <Route exact path="/" component={MainScreen} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                </div>
            </Router>
        )

    }

}

export default App;
