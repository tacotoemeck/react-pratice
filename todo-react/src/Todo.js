import React from 'react';
import './Todo.css'

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: this.props.todo,
            editingMode: false,
            isCompleted: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
    }

    handleComplete(e) {
        this.setState({ isCompleted: !this.state.isCompleted })
    }

    toggleForm(e) {
        this.setState({ editingMode: !this.state.editingMode })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateTodo(this.props.id, this.state.todo);
        this.setState({ editingMode: false });
    }

    handleChange(e) {
        this.setState({ todo: { ...this.state.todo, name: e.target.value } })
    }

    render() {
        const updateForm = (
            <form className="Todo" onSubmit={this.handleSubmit}>
                <input type="text" name="name" value={this.state.todo.name} onChange={this.handleChange} />
                <button>SAVE</button>
            </form>);

        const todoDisplay = (
            <div className={(this.state.isCompleted ? "todo-completed" : "") + " Todo"}>
                <p onClick={this.handleComplete} className={this.state.isCompleted ? "todo-completed" : ""}>{this.props.name}</p>
                <span className="todo-buttons">
                    <i className="fas fa-trash-alt" onClick={this.props.removeTodo} />
                    <i className="fas fa-edit" onClick={this.toggleForm} />
                </span>

            </div>);

        const display = this.state.editingMode ? updateForm : todoDisplay;
        return (
            display


        )
    }
}

export default Todo;