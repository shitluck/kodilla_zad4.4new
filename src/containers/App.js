import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.state = {
            data: [{
                id: uuid.v4(),
                text: 'example thing TO DO'
                }],
            inputValue: ''
        };
    }

    changeInputValue(newVal) {
        this.setState({inputValue: newVal});
    }

    addTodo(val) {
        if (val.length>=2) {
            const todo = {
                text: val,
                id: uuid.v4(),
            };
            const data = [...this.state.data, todo];
            this.setState({
                data: data,
                inputValue: ''
            });
        }
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title title="My To Do List" number={this.state.data.length}/>
                <TodoForm inputValue={this.state.inputValue} addTodo={(val) => this.addTodo(val)} changeInputValue={(val) => this.changeInputValue(val)}/>
                <TodoList data={this.state.data} removeTodo={(id) => this.removeTodo(id)}/>
            </div>
        );
    }
}

export default App;