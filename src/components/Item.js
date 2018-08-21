import React, { Component } from 'react';

class Item extends Component {
    showLevel(level){
        let elmlevel = <span className="label label-default">Low</span>;
        if(level === 1){
            elmlevel = <span className="label label-info">Medium</span>;
        } else if(level === 2){
            elmlevel = <span className="label label-danger">High</span>;
        }
        return elmlevel;
    }
    
    render() {
        //console.log(this.props.item);
        
        return (
            <tr>
                <td className="text-center">{this.props.id + 1}</td>
                <td>{this.props.item.name}</td>
                <td className="text-center">{this.showLevel(this.props.item.level)}</td>
                <td>
                    <button onClick={()=>this.props.onClickEdit(this.props.item)} type="button" className="btn btn-warning">Edit</button>
                    <button onClick={()=>this.props.onClickDelete(this.props.item.id)} type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }

    
}

export default Item;

