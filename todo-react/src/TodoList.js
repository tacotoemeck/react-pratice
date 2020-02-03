import React from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        // this.completed = this.completed(this);
    }

    create(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    remove(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    update(id, updatedTask) {
        const todoIndex = this.state.todos.findIndex(todo => todo.id === id);
        const { todos } = this.state;
        todos[todoIndex] = updatedTask;
        this.setState({
            todos: [...todos]
        })
    }

    render() {
        const todos = this.state.todos.map(todo => (
            <Todo
                name={todo.name}
                completed={todo.completed}
                editingMode={todo.editingMode}
                id={todo.id}
                key={todo.id}
                todo={todo}
                removeTodo={() => this.remove(todo.id)}
                updateTodo={this.update}
            />
        ))
        return (
            <div className='TodoList'>
                <img src="../logo192.png" />
                <h1>TODO LIST</h1>

                <NewTodoForm createTodo={this.create} />

                <ul>
                    <li className='todo-list'>{todos}</li>
                </ul>
            </div>

        )
    }
}

export default TodoList;