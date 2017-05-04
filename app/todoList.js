import React from 'react';
import TodoItem from './todoItem.js';

const TodoList = ({ todos, remove, complete }) => {
    const todoNode = todos.map((item) => {
        console.log(item);
        return (<TodoItem todo={item} key={item.id} remove={remove} complete={complete} />);
    });
    console.log(todoNode);
    return (<div>{todoNode}</div>);
};

export default TodoList;
