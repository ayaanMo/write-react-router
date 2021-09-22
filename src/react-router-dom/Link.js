import React, { Component } from 'react';
import { Consumer } from './context'
class Link extends Component {
    render() {
        return (
            <Consumer>
                {
                    state => {
                        let { to } = this.props;
                        return <a onClick={() => state.history.push(to)}>
                            {this.props.children}
                        </a>
                    }
                }
            </Consumer>
        );
    }
}

export default Link;
