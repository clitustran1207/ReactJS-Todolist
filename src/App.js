import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import Title from './components/Title';
import {genId} from './mocks/Tasks';
import {orderBy as funcOrderBy, remove} from 'lodash';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items       : [],
            isShowForm  : false,
            searchStr   : '',
            orderBy     : 'NAME',
            orderDir    : 'ASC',
            selectedItem: ''
        };   
    }
    componentWillMount(){
        let items = JSON.parse(localStorage.getItem('tasks')) || [];
        this.setState({
            items: items
        });
    }
    checkForm(){
        if(this.state.isShowForm){
            return <Form clickCancel={this.clickCancelForm} onClickSubmit={this.handleSubmit} selectedItem={this.state.selectedItem} />;
        }
    }
    handleToggleForm = () => {
        this.setState({
            isShowForm  : !this.state.isShowForm,
            selectedItem: ''
        });
    }
    clickCancelForm = () => {
        this.setState({
            isShowForm  : false,
            selectedItem: ''
        });
    }
    handleSearch = (value) => {
        this.setState({
            searchStr: value
        });
    }
    handleSort = (orderBy, orderDir) => {
        this.setState({
            orderBy: orderBy,
            orderDir: orderDir
        });
    }
    handleDelete = (id) => {
        //console.log(id);
        remove(this.state.items, (item) => {
            return item.id === id
        });
        this.setState({
            items: this.state.items
        });
        localStorage.setItem('tasks', JSON.stringify(this.state.items));
    }
    handleSubmit = (item) => {
        //console.log(item);
        let {items} = this.state
        if(item.task_id){ //have id -> edit
            console.log('edit');
            console.log(item);
            items.forEach((elm, key) => {
                if(elm.id === item.task_id){
                    items[key].name = item.task_name;
                    items[key].level = +item.task_level;
                }
            });
        } 
        else { //no id -> first time add
            console.log('add');
            items.push({
                id: genId(),
                name: item.task_name,
                level: +item.task_level
            });
        }
        
        this.setState({
            items: items,
            isShowForm: false
        });
        localStorage.setItem('tasks', JSON.stringify(this.state.items));
    }
    handleEdit = (item) => {
        //console.log(item);
        this.setState({
            selectedItem: item,
            isShowForm  : true
        });
    }
        
    render() {
        let allTasks = this.state.items;
        let result = [];
        //Search
        if(this.state.searchStr.length > 0){
            allTasks.forEach((item) => {
                if(item.name.toLowerCase().indexOf(this.state.searchStr.toLowerCase()) !== -1){
                    result.push(item);
                }
            });
        } else {
            result = allTasks;
        }
        //Sort
        result = funcOrderBy(result, [this.state.orderBy.toLowerCase()], [this.state.orderDir.toLowerCase()]);


        // console.log(this.state.searchStr);
        return (
            <div className="Todolist">
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                </div>
                <div className="List">
                    <div className="container">
                        {/* TITLE : START */}
                        <Title />
                        {/* TITLE : END */}

                        {/* CONTROL (SEARCH + SORT + ADD) : START */}
                        <Control 
                            clickAdd={this.handleToggleForm}
                            isShowForm={this.state.isShowForm}
                            searchStr={this.state.searchStr} 
                            clickSearch={this.handleSearch}   
                            orderBy={this.state.orderBy}
                            orderDir={this.state.orderDir}
                            onClickSort={this.handleSort}
                        />
                        {/* CONTROL (SEARCH + SORT + ADD) : END */}

                        {/* FORM : START */}
                        { this.checkForm() }
                        {/* FORM : END */}

                        {/* LIST : START */}
                        <List items={result} onClickDelete={this.handleDelete} onClickEdit={this.handleEdit} />
                        {/* LIST : END */}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
