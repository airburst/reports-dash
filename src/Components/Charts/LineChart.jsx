import React, { Component, PropTypes } from 'react';
import * as d3 from 'd3';
// import Dots from './Dots';
import { lineData } from '../../Data/lineData.json';

class LineChart extends Component {

    constructor() {
        super();
        this.state = {
            width: 800
        };
    }

    render() {
        let data = lineData;

        let margin = { top: 0, right: 0, bottom: 0, left: 20 },
            w = this.state.width - (margin.left + margin.right),
            h = this.props.height - (margin.top + margin.bottom);

        let parseDate = d3.timeParse("%m-%d-%Y");

        data.forEach(d => {
            d.date = parseDate(d.day);
        });

        let x = d3.scaleTime()
            .domain(d3.extent(data, d => d.date))
            .rangeRound([0, w]);

        let y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.count + 100)])
            .range([h, 0]);

        let line = d3.line()
            .x(d => x(d.date))
            .y(d => y(d.count))
            .curve(d3.curveCatmullRom);

        let transform = 'translate(' + margin.left + ',' + margin.top + ')';

        return (
            <svg
                id={this.props.chartId}
                width={this.state.width}
                height={this.props.height}>
                <g transform={transform}>
                    <path
                        className="line shadow"
                        d={line(data)}
                        strokeLinecap="round" />
                </g>
            </svg>
        );
    }
}

LineChart.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    chartId: PropTypes.string
};

LineChart.defaultProps = {
    width: 800,
    height: 300,
    chartId: 'v1_chart'
};

export default LineChart;

// return (
//     <svg
//         id={this.props.chartId}
//         width={this.state.width}
//         height={this.props.height}>
//         <g transform={transform}>
//             <path
//                 className="line shadow"
//                 d={line(data)}
//                 strokeLinecap="round" />
//             <Dots
//                 data={data}
//                 x={x}
//                 y={y} />
//         </g>
//     </svg>
// );
