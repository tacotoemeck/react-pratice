import React from 'react';
import uuid from 'uuid';
import './NewTodoForm.css'

class NewTodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            editingMode: false,
            completed: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const newTodo = { ...this.state, id: uuid() };
        this.props.createTodo(newTodo);
        this.setState({
            name: "",
        })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div className="NewTodoForm">
                <form onSubmit={this.handleSubmit}>
                    {!this.props.editingMode && <label htmlFor="name"> </label>}
                    <input
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}

                    />
                    <button>{this.props.editingMode ? "SAVE" : "ADD NEW"}</button>
                </form>
            </div>
        )
    }
}

export default NewTodoForm; 