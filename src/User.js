import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from './react-router-dom';
import UserAdd from './UserAdd';
import UserList from './UserList';
import Detail from './Detail';
class User extends Component {
    render() {
        return (
            <div>
                <div className="col-md-2">
                    <div className="nav nav-stacked">
                        <li style={{ cursor: "pointer" }}><Link to="/user/add">UserAdd</Link></li>
                        <li style={{ cursor: "pointer" }}><Link to="/user/list">UserList</Link></li>
                    </div>
                </div>
                <div className='col-md-10'>
                    <Switch>
                        <Route path='/user/add' component={UserAdd} />
                        <Route path='/user/list' component={UserList} />
                        <Route path='/user/detail/:id' component={Detail} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default User;
