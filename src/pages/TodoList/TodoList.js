import React, { Component } from 'react'
import CreateTodo from '../../components/CreateTodo/CreateTodo';
import Text from '../../components/Text';
import Todo from '../../components/Todo/Todo';
import TodoService from '../../services/todos.service'
import SCTodoList from './TodoList.styled';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
    this.todoService = new TodoService();
    // this.refreshState = this.refreshState.bind(this);
  }

  refreshState() {
    this.todoService.get()
      .then(response => {
        console.log(response.data);
        this.setState({ todos: response.data });
      })
      .catch(err => console.error(err))
  }

  componentDidMount() {
    this.refreshState();
  }

  displayTodos(){
    const { todos } = this.state;
    return todos.map(todo => {
      // <Todo key={todo.id} todo={todo}/>
      // <Todo key={todo.id} name={todo.name} description={todo.description} done={todo.done} .../>
      return (
        <Todo refreshState={() => this.refreshState()} key={todo.id} {...todo}/>
      )
    })
  }

  render() {
    const { todos } = this.state;
    return (
      <SCTodoList>
        <div className="card">
          <Text size="l" weight="superDisplay" color="black">
            {todos.length === 0 ? "Ups, no tienes ningún todo" : todos.length === 1 ? "Estás más cerca de no dejarte nada, todo" : "Perfecto, sigue añadiento todos"}
          </Text>
          {
            this.displayTodos()
          }
          <CreateTodo refreshState={() => this.refreshState()} />
        </div>
      </SCTodoList>
    )
  }
}
