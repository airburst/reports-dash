import React from 'react';
import * as d3 from 'd3';
import Bar from './Bar';

class BarChart extends React.Component {

    displayName: 'BarChart';

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         width: 500,
    //         height: 400
    //     };
    // }

    // componentDidMount() {
    //     const barchart = this.refs['barchart'];
    //     this.setState({
    //         width: barchart.clientWidth,
    //         height: barchart.clientHeight
    //     });
    // }

    render() {
        let { data, width, height, color } = this.props;

        let yScale = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([0, height]);

        let xScale = d3.scaleBand()
            .domain(d3.range(data.length))
            .rangeRound([0, width], 0.05)
            .paddingInner(0.1);

        let bars = this.props.data.map((point, i) => {
            return (
                <Bar
                    height={yScale(point)}
                    width={xScale.bandwidth()}
                    offset={xScale(i)}
                    availableHeight={height}
                    color={color}
                    key={i}
                    />
            )
        });

        return (
            <g ref="barchart">{bars}</g>
        );

    }
}

BarChart.defaultProps = {
    width: 500,
    height: 400
}

export default BarChart;