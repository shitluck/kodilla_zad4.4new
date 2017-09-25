import React from 'react';
import style from './TodoList.css';

const TodoList = props => {
    return (
        <div className={style.TodoList}>
            <ul>
                {props.data.map(({id, text} = props) =>
                    <li key={id} onClick={e => props.remove(id)}>{text}</li>
                )}
            </ul>
        </div>
    )
}

export default TodoList;