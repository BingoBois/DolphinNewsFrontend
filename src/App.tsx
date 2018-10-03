import * as React from 'react';
import HeaderBar from './components/HeaderBar';
import MainScreen from './screens/MainScreen';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <Route path="/" component={HeaderBar} />
                    <Route exact path="/" component={MainScreen} />
                </div>
            </Router>
        )

    }

}

export default App;
