import React from 'react';
import style from './todoForm.css';

const TodoForm = props => {
	return (
		<div className={style.TodoForm}>
			<input
				type="text" 
				placeholder="your TO DO thing"
				value={props.inputValue} 
				onChange={(e) => {
					props.changeInputValue(e.target.value);
				}}
			/>
			<button onClick={() => { props.addTodo(props.inputValue); }}>ADD</button>
		</div>
	)
}

export default TodoForm;