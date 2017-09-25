import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className={style.TodoList}>
            <ul>
                {props.data.map(todo => {
                    return <Todo key={todo.id} id={todo.id} removeTodo={props.removeTodo} text={todo.text}/>
                })}
            </ul>
        </div>
    )
}

export default TodoList;