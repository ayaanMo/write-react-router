import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link, Redirect, Switch } from './react-router-dom'
import Home from './Home';
import Profile from './Profile';
import User from './User';
import 'bootstrap/dist/css/bootstrap.css'
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className='navbar navbar-inverse'>
                        <div className='container-fluid'>
                            <div className='navbar-heading'>
                                <div className='navbar-brand'>React-Router</div>
                            </div>
                            <div className='nav navbar-nav'>
                                <li style={{ cursor: 'pointer' }}><Link to='/home'>首页</Link></li>
                                <li style={{ cursor: 'pointer' }}><Link to='/profile'>个人中心</Link></li>
                                <li style={{ cursor: 'pointer' }}><Link to='/user'>用户</Link></li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <Switch>
                        <Route path="/home" component={Home} exact></Route>
                        <Route path="/profile" component={Profile}></Route>
                        <Route path="/user" component={User}></Route>
                        <Redirect to="/home" />
                    </Switch>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));