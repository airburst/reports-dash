import React, { Component, PropTypes } from 'react';
import './Widget.css';

class Widget extends Component {

    constructor() {
        super();
        this.state = {
            width: 600,
            height: 400
        };
    }

    componentDidMount() {
        const container = this.refs['container'];
        this.setState({
            width: container.clientWidth,
            height: container.clientHeight
        });
    }

    render() {
        let widgetClass = 'widget col-xs-' + this.props.colspan * 4;
        let children = React.Children.map(this.props.children, (element, idx) => {
            let el = Object.assign({}, element, { width: this.state.width, height: this.state.height });
            console.log('rendering', el.width)
            return React.cloneElement(el, { ref: idx });
        });

        // if (this.props.children != null) {
        //     if (Array.isArray(this.props.children)) {
        //         children = this.props.children.map((element, i) => {
        //             return self.createElements(element, i)
        //         });
        //     } else {
        //         children = self.createElements(this.props.children, 0)
        //     }
        // }

        return (
            <div className={widgetClass}>
                <div className="inner" ref="container">
                    <svg
                        width={this.state.width}
                        height={this.state.height}>
                        {children}
                    </svg>
                </div>
            </div>
        );
    }

}

Widget.propTypes = {
    colspan: PropTypes.number,
};

Widget.defaultProps = {
    colspan: 1
}

export default Widget;