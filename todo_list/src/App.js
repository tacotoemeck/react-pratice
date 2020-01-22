import React, { Component } from 'react';
import './App.css';

const TodoItem = ({ text }) => (
  <li>{text}</li>
)

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      newTodo: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({ todos, newTodo: '' })
  }

  render() {
    const { newTodo } = this.state;
    const todos = this.state.todos.map((t, i) => (
      <TodoItem key={i} text={t} />
    ))
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>
            Task:
          <input
              type="text"
              name="newTodo"
              onChange={this.handleChange}
              value={newTodo} />
          </label>
          <input type="submit" value="submit" />
        </form>
        <div>
          <ol>
            {todos}
          </ol>
        </div>
      </div>
    )
  }

}

export default App

