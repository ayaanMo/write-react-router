import React, { Component } from 'react';
import { Provider } from './context'
class HashRouter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: {
                pathName: window.location.hash.substr(1) || '/'
            }
        }
    }
    hashChange = () => {
        this.setState({
            location: {
                ...this.state.location,
                pathName: window.location.hash.substr(1) || '/'
            }
        })
    }
    componentDidMount() {
        //默认hash没有值时候的处理
        window.location.hash = window.location.hash || '/';
        // 监听浏览器hash变化时候的处理
        window.addEventListener('hashchange', this.hashChange)
    }
    componentWillUnmount() {
        window.removeEventListener('hashchange', this.hashChange)
    }
    render() {
        let value = {
            location: this.state.location,
            history: {
                push(to) {
                    window.location.hash = to;
                }
            }
        };
        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        );
    }
}

export default HashRouter;
