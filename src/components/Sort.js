import React, { Component } from 'react';

class Sort extends Component {
    clickSort = (orderBy, orderDir) => {
        this.props.onClickSort(orderBy, orderDir);
    }

    render() {
        return (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="dropdown">
                    <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sort by <span className="caret" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><a onClick={()=>this.clickSort('NAME', 'ASC')} role="button">Name ASC</a></li>
                        <li><a onClick={()=>this.clickSort('NAME', 'DESC')} role="button">Name DESC</a></li>
                        <li role="separator" className="divider" />
                        <li><a onClick={()=>this.clickSort('LEVEL', 'ASC')} role="button">Level ASC</a></li>
                        <li><a onClick={()=>this.clickSort('LEVEL', 'DESC')} role="button">Level DESC</a></li>
                    </ul>
                    <span className="label label-success label-medium">{this.props.orderBy} - {this.props.orderDir}</span>
                </div>
            </div>
        );
    }
}

export default Sort;

