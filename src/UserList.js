import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from './react-router-dom';

class UserList extends Component {
    render() {
        return (
            <div>
                <li style={{ cursor: "pointer" }}><Link to="/user/detail/1">用户1</Link></li>
                <li style={{ cursor: "pointer" }}><Link to="/user/detail/2">用户2</Link></li>
                <li style={{ cursor: "pointer" }}><Link to="/user/detail/3">用户3</Link></li>
            </div>
        );
    }
}

export default UserList;
