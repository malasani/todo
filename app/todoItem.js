import React from 'react';


const TodoItem = ({ todo, remove, complete }) => (
    <div className="row">
        <a className='remove' onClick={(event) => { event.preventDefault(); remove(todo.id); }}>
            <i className='fa fa-trash-o'></i>
        </a>
        <a className='completed' onClick={(event) => { event.preventDefault(), complete(todo.id); }}>
            <i className='fa fa-check'></i>
        </a>
        <label htmlFor={todo.id}> {todo.text} </label>
    </div>
);



export default TodoItem; 