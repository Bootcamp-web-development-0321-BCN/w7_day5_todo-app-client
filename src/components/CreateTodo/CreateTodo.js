import React, { Component } from 'react'
import TodoService from '../../services/todos.service';
import RoundButton from '../RoundButton/RoundButton';

const validators = {
  name: (value) => {
    let message;
    if(!value){
      message = "Name is required";
    }
    return message;
  }
}
export default class CreateTodo extends Component {
  constructor(props){
    super(props);
    this.state = {
      fields: {
        name: ""
      }, 
      errors: {
        name: null
      }
    }
    // Creamos una instancia del servicio de Todos
    this.todoService = new TodoService();
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.fields)

    // Usamos el servicio para llamar a la API y crear el Todo en la base de datos
    this.todoService.create(this.state.fields)
    .then(() => {
      console.log('Created');
      // Llamamos a la función que TodoList nos ha pasado como prop
      this.setState({
        fields: {
          name: ""
        }, 
        errors: {
          name: null
        }
      }, () => {
        this.props.refreshState();
      })
    })
    .catch(err => console.error(err))
  }

  handleChange(event){
    const { name, value } = event.target;
    this.setState({
      fields: {
        ...this.state.fields, 
        [name]: value
      },
      errors:{
        ...this.state.errors,
        [name]: validators[name](value)
      }
    })
  }

  render() {
    const { fields, errors } = this.state;
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text" value={fields.name} onChange={(e) => this.handleChange(e)} name="name" />
        
        <RoundButton type="submit">
          Crear todo
        </RoundButton>
      </form>
    )
  }
}
