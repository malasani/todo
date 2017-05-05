import React, { Component } from 'react';
import TodoForm from './todoForm.js'
import TodoList from './todoList.js'

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { text: "hello", id: 1, completStatus: false },
                { text: "helsdlo", id: 2, completStatus: true }]
        };
        this.addTodo = this.handleAdd.bind(this);
        this.remove = this.handleRemove.bind(this);
        this.complete = this.handleStatus.bind(this);
    }

    handleAdd(text) {
        if (text != "") {
            const todoItem = { text: text, id: this.state.data.length + 1, completStatus: false };
            this.state.data.push(todoItem);
            console.log(JSON.stringify(todoItem));
            this.setState({ data: this.state.data });
        }
    }
    handleRemove(id) {
        const todoFilter = this.state.data.filter((item) => {
            if (item.id != id) return item;
        });

        console.log(JSON.stringify(todoFilter));
        this.setState({ data: todoFilter });
    }
    handleStatus(id) {

        const todoFilter = this.state.data.filter((item) => {
            if (item.id != id) return item;
            else {
                item.completStatus = item.completStatus == true ? false : true;
                return item;
            }
        });
        this.setState({ data: todoFilter });

        console.log(JSON.stringify(todoFilter));
    }
    render() {
        return (
            <div className="container">
                <TodoForm addTodo={this.addTodo} />
                <TodoList todos={this.state.data} remove={this.remove} complete={this.complete} />
            </div>
        );
    }
}

export default TodoApp;