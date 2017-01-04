import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

class Axis extends Component {

    componentDidUpdate() {
        this.renderAxis();
    }

    componentDidMount() {
        this.renderAxis();
    }

    renderAxis() {
        let _self = this;
        this.axis = d3.svg.axis()
            .scale(this.props.scale)
            .orient(this.props.orient)
            .ticks(this.props.ticks);

        if (this.props.tickFormat != null && this.props.axisType === 'x')
            this.axis.tickFormat(d3.time.format(this.props.tickFormat));

        let node = ReactDOM.findDOMNode(this);
        d3.select(node).call(this.axis);
    }

    render() {
        let translate = "translate(0," + (this.props.h) + ")";
        return (
            <g
                className={this.props.className} 
                transform={this.props.axisType == 'x' ? translate : ""}>
            </g>
        );
    }

}

Axis.propTypes = {
    h: PropTypes.number,
    scale: PropTypes.func,
    axisType: PropTypes.oneOf(['x', 'y']),
    orient: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
    className: PropTypes.string,
    tickFormat: PropTypes.string,
    ticks: PropTypes.number
};

export default Axis;
