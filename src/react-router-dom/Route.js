import React, { Component } from 'react';
import { Consumer } from './context';
import { pathToRegexp } from 'path-to-regexp'
class Route extends Component {
    render() {
        return (
            <Consumer>
                {state => {
                    // path 是Route来的
                    let { component: Component, path, exact = false } = this.props;
                    // pathName是location中来的
                    let pathName = state.location.pathName;
                    // 根据path实现一个正则 通过这个正则匹配
                    let keys = [];
                    let reg = pathToRegexp(path, keys, { end: exact });
                    keys = keys.map(item => item.name);
                    let result = pathName.match(reg);
                    let [url, ...values] = result || [];
                    let props = {
                        location: state.location,
                        history: state.history,
                        march: {
                            isExact: exact, params: keys.reduce((obj, currentValue, currentIndex) => {
                                obj[currentValue] = values[currentIndex];
                                return obj
                            }, {})
                        }
                    }
                    if (result) {
                        return <Component {...props}></Component>;
                    }
                    return null
                }}
            </Consumer>
        );
    }
}

export default Route;
