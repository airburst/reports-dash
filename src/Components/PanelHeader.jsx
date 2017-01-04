import React, { Component, PropTypes } from 'react';

class PanelHeader extends Component {

    render() {
        return (
            <div className="panel-header">
                <div className="float-xs-left panel-title">{this.props.title}</div>
                <div className="float-xs-right line-height-30">
                    {this.props.children}
                </div>

            </div>
        );
    }

}

PanelHeader.propTypes = {
    title: PropTypes.string
}

export default PanelHeader;