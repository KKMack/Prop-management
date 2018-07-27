import React, { Component } from 'react';

class HeaderWrapper extends Component {
    render() {
        return (
            <div className="header-wrapper">
                ...HeaderWrapper
                {this.props.children}
            </div>
        )
    }
}

export default HeaderWrapper;