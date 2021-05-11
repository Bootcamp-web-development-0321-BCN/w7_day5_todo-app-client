import React, { useEffect, useState } from 'react'
import Text from '../../components/Text';
import TodoService from '../../services/todos.service';
import SCTodoList from './TodoList.styled';

export default function TodoListFunction(props) {
  // [ nombredelestado, funcion que lo modifica ] = useState(valor Inical);
  const [ todos, setTodos ] = useState([]);
  const todoService = new TodoService();

  // Sustituye al componentDidUpdate
  useEffect(() => {

  }, [props, todos])

  const refreshState = () => {
    todoService.get()
    .then(response => {
      console.log(response.data);
      setTodos(response.data);
    })
    .catch(err => console.error(err))
  }

  // Sustituye al componentDidMount
  useEffect(() => {
    refreshState();
    //window.addEventListener('scroll', refreshState);

    // Sustituye al componentWillUnmount OPCIONAL
    return () => {
      //window.removeEventListener('scroll', refreshState);
    }
  }, [])

  displayTodos = () => {
    return todos.map(todo => {
      return (
        <Todo key={todo.id} refreshState={() => refreshState()} {...todo} />
      )
    })
  }

  handleLogout = () => {
    props.logout();
  }

  return (
    <SCTodoList>
        <Text className="close-session" onClick={() => handleLogout()} as="p" color="black">Cerrar sesión</Text>
        <div className="card">
          <Text size="l" weight="superDisplay" color="black">
            {todos.length === 0 ? "Ups, no tienes ningún todo" : todos.length === 1 ? "Estás más cerca de no dejarte nada, todo" : "Perfecto, sigue añadiento todos"}
          </Text>
          {
            displayTodos()
          }
          <CreateTodo refreshState={() => refreshState()} />
        </div>
      </SCTodoList>
  )
}
