import React, { Component } from 'react';

class Panel extends Component {

    render() {
        return (
            <div className="bg">
                {this.props.children}
            </div>
        );
    }
}

export default Panel;