import React, { Component } from 'react';

class UserAdd extends Component {
    constructor() {
        super();
        this.text = React.createRef();
    }
    handleSubmit = (e) => {
        this.props.history.push("/user/list")
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref="text" />
                <button type="submit">提交</button>
            </form>
        );
    }
}

export default UserAdd;
