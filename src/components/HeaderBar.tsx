import * as React from 'react';
import Store from '../store/Store';
import '../stylesheets/headerStyles.css';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom'

@observer
export default class HeaderBar extends React.Component {

    filterByNew = () => {
        //TODO: Make multiple filters for each header button
    }

    createNewPost = () => {
        console.log('Sending new Post Creation to RabbitMQ server');
        //DataHandler.createNewPost({});
    }

    render() {
        const onClickEvents: Function[] = [this.filterByNew];
        let headerArray = [{ option: 'welcome', loggedIn: true },
        { option: 'new', loggedIn: false },
        { option: 'threads', loggedIn: true },
        { option: 'comments', loggedIn: false },
        { option: 'show', loggedIn: false },
        { option: 'ask', loggedIn: false },
        { option: 'jobs', loggedIn: false },
        { option: 'submit', loggedIn: false }
        ];
        const options = headerArray.map((obj, index) => {
            if (obj.loggedIn && !Store.token) {
                return (
                    <div key={obj.option} />
                )
            }
            return (
                <div style={{ display: 'flex', flexDirection: 'row' }} key={index}>
                    <p className="headerText" style={{ cursor: 'pointer' }} onClick={() => onClickEvents[index] ? onClickEvents[index]() : undefined}>{obj.option}</p>
                    {index === headerArray.length - 1 ? null : <p className="headerText unselectable" >|</p>}
                </div>
            )
        })

        return (
            <div className="headerBar">
                <div className="innerHeader">
                    <Link to="/">
                        <img className="homeIcon" src={require('../assets/dolphin_icon.png')} width={20} height={20} style={{ border: '1px solid white', margin: '2px' }} />
                    </Link>
                    <p className="headerName" style={{ fontWeight: 'bolder' }}>Dolphin News</p>
                    {options}
                </div>

                <div className="lastHeader">
                    <p className="loginButton unselectable" style={{ cursor: 'pointer' }} >{Store.user !== undefined ? <Link to="/" style={{ textDecoration: 'none' }} onClick={() => { Store.user = undefined }}>{Store.user.username} - logout</Link> : (<Link to="/login" style={{ textDecoration: 'none' }}>login</Link>)}</p>
                </div>
            </div>
        )
    }

}
