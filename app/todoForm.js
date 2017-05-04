import React from 'react';

const TodoForm = ({ addTodo }) => {

    let text = '';
    const change = (event) => {
        text = event.target.value;
        console.log(text + event);
    };
    const click = (event) => {
        event.preventdefault();
        console.log("click=>" + text);
        addTodo(text);
    };
    return (
        <div>
            <div className='add'>
                <i className='fa fa-plus'></i>
            </div>
            <div className='title'>
                <h1>Things to do</h1>
            </div>

            <div className='new-task'>
                <a className='add-new' onClick={click}>
                    <i className='fa fa-plus'></i>
                </a>
                <input id='todo-text' placeholder='New task' onChange={change} />
            </div>
        </div>
    );

};


export default TodoForm;