import React from 'react';

class Cards extends React.Component {

    render() {
        var color = ['#53c79f', '#64b0cc', '#7a6fca', '#ca6f96', '#e58c72', '#e5c072'];

        var cards = color.map(function (d, i) {
            var style = {
                'backgroundColor': d
            };
            return (
                <div className="col-xs-2 custom_padding margin-below-20" key={i}>
                    <div className="card" style={style}>
                        <div className="card_header">
                            <div className="float-xs-left">
                                Visitors
                            </div>
                            <div className="float-xs-right">
                                70%
                            </div>
                        </div>
                        <div className="card_body">
                            3,502
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div className="row">
                {cards}
            </div>
        );
    }
}

export default Cards;