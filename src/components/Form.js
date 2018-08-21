import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            task_id   : '',
            task_name : '',
            task_level: 0
        };
    }
    componentWillMount(){
        this.updateItem(this.props.selectedItem);
    } //take the selected task, setState, display at Form (1st select)
    componentWillReceiveProps(nextProps){
        this.updateItem(nextProps);
    } //take the selected task, to update the Form (after 1st select)
    updateItem(item){
        if(item !== ''){
            this.setState({
                task_id     : item.id,
                task_name   : item.name,
                task_level  : item.level 
            });
        }
    }
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
            [name]: value
        });
    }
    handleSubmit = (event) => {
        //console.log(this.state);
        this.props.onClickSubmit(this.state);
        event.preventDefault();
    }
    clickCancelForm = () => {
        this.props.clickCancel();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-offset-7 col-md-5">
                    <form onSubmit={this.handleSubmit} className="form-inline" >
                        <div className="form-group">
                            <label className="sr-only">label</label>
                            <input onChange={this.handleInputChange} value={this.state.task_name} type="text" className="form-control" placeholder="Task Name" name="task_name" autoFocus required/>
                        </div>
                        <div className="form-group">
                            <label className="sr-only">label</label>
                            <select onChange={this.handleInputChange} value={this.state.task_level} className="form-control" name="task_level" required>
                                <option value="0">Low</option>   
                                <option value="1">Medium</option>
                                <option value="2">High</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button onClick={this.clickCancelForm} type="button" className="btn btn-default">Cancel</button>
                    </form>
                </div>
            </div>          
        );
    }
}

export default Form;
