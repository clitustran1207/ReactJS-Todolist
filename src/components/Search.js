import React, { Component } from 'react';

class Search extends Component {
    constructor(props){
        super(props);

        this.state = {
            searchStr: ''
        }
    }
    handleSearch = () => {
        this.props.clickSearch(this.state.searchStr)
    }
    handleChange = (event) => {
        this.setState({searchStr: event.target.value});
    }
    handleClear = () => {
        this.setState({searchStr: ''});
        this.props.clickSearch('');
    }
    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for..." onChange={this.handleChange} value={this.state.searchStr} autoFocus />
                    <span className="input-group-btn">
                        <button onClick={this.handleSearch} className="btn btn-info" type="button">Go!</button>
                        <button onClick={this.handleClear} className="btn btn-warning" type="button">Clear</button>
                    </span>
                </div>
            </div>    
        );
    }
}

export default Search;

