import React, { Component } from 'react';
import { Consumer } from './context';
import { pathToRegexp } from 'path-to-regexp'
class Switch extends Component {
    render() {
        return (
            <Consumer>
                {state => {
                    let pathName = state.location.pathName;
                    let children = this.props.children;
                    for (let i = 0; i < children.length; i++) {
                        let child = children[i];
                        // Redirect 没有path属性
                        let path = child.props.path || "";
                        let reg = pathToRegexp(path, [], { end: false });
                        if (reg.test(pathName)) {
                            // 匹配成功把匹配的组件进行返还
                            return child;
                        }
                    }
                    return null
                }}
            </Consumer>
        );
    }
}

export default Switch;
