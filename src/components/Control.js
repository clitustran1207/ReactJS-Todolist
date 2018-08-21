import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
    handleClickAdd = () => {
        this.props.clickAdd();
    }

    render() {
        //console.log(this.props.isShowForm);

        let button = <button onClick={this.handleClickAdd} type="button" className="btn btn-info btn-block">Add Task</button>;
        if(this.props.isShowForm){
            button = <button onClick={this.handleClickAdd} type="button" className="btn btn-danger btn-block">Close form</button>;
        }
         
        return (
            <div className="row">
                {/* SEARCH : START */}
                <Search clickSearch={this.props.clickSearch} />
                {/* SEARCH : END */}

                {/* SORT : START */}
                <Sort 
                    orderBy={this.props.orderBy} 
                    orderDir={this.props.orderDir}
                    onClickSort={this.props.onClickSort} 
                />
                {/* SORT : END */}

                {/* ADD : START */}
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                    { button }
                </div> 
                {/* ADD : END */}
            </div>        
        );
    }
}

export default Control;

