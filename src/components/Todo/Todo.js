import React from 'react'
import TodoService from '../../services/todos.service'
import Text from '../Text'
import SCTodo from './Todo.styled'

export default function Todo({ name, done, priority, id, refreshState }) {
  const todoService = new TodoService();
  const deleteTodo = () => {
    todoService.deleteOne(id)
      .then(() => {
        console.log('Deleted');
        refreshState();
      })
      .catch(err => console.error(err))
  }

  const updateDone = () => {
    /*
     let newValue = false;
     if(done){
       newValue = false;
     } else {
       newValue = true;
     }
      todoService.updateOne(id, { done: newValue })
     */
    todoService.updateOne(id, { done: !done })
      .then(() => {
        console.log('Updated');
        refreshState();
      })
      .catch(err => console.error(err))
  }

  const updatePriority = () => {
    todoService.updateOne(id, { priority: !priority })
      .then(() => {
        console.log('Updated');
        refreshState();
      })
      .catch(err => console.error(err))
  }

  // Funciones updateDone y updatePriority refactorizadas 🔥
  // const update = (data) => {
  //   todoService.updateOne(id, data)
  //   .then(() => {
  //     console.log('Updated');
  //     refreshState();
  //   })
  //   .catch(err => console.error(err))
  // }

  return (
    // <SCTodo>
    //   <button onClick={() => update({ done: !done })}>{done ? "Deshacer todo" : "Marcar como realizado"}</button>
    //   <Text>{name}</Text>
    //   <button onClick={() => update({ priority: !priority })}>{priority ? "Marcar como no prioritario" : "Marcar como prioritario"}</button>
    //   <button onClick={() => deleteTodo()}>Eliminar</button>
    // </SCTodo>
    <SCTodo>
      <button onClick={() => updateDone()}>{done ? "Deshacer todo" : "Marcar como realizado"}</button>
      <Text>{name}</Text>
      <button onClick={() => updatePriority()}>{priority ? "Marcar como no prioritario" : "Marcar como prioritario"}</button>
      <button onClick={() => deleteTodo()}>Eliminar</button>
    </SCTodo>
  )
}
