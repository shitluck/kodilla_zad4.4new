import React from 'react';

const Todo = props => {
    return (
        <li onClick={e => props.removeTodo(props.id)}>{props.text}</li>
    )
}

export default Todo;