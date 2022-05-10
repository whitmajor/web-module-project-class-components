import React from 'react'

import TodoList from "../components/TodoList"
import Form from "../components/Form"

const todo =[
  {
    name: 'Organize Garage',
    id: 1528817077286, // could look different, you could use a timestamp to generate it
    completed: false
  },
  {
    name: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    name: 'Wash Car',
    id: 1528817077768, // could look different, you could use a timestamp to generate it
    completed: false
  },
  {
    name: 'Get Lemonade',
    id: 1528817084395,
    completed: false
  }
];
console.log(todo)

export default class App extends React.Component {
  constructor(){
    super()
    this.state= {  
      todo: todo
    }
  }


  toggleItem = (todoId)=>{
  
  this.setState({
    todo: this.state.todo.map(todo=> {
      if(todoId === todo.id){
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo;
    })
  });
  }

  addItem =(e,todo) =>{
    e.preventDefault();
    const newTodo ={
      name: todo,
      id: Date.now(),
      complete: false,
    }
    this.setState({
      todo: [...this.state.todo, newTodo]
    })
  }
  clearTodo =()=>{
    this.setState ({
      todo: this.state.todo.filter(todo => !todo.completed)
    })
  }


  render() {
    return (
      <div>

       <TodoList
       todo = {this.state.todo}
       toggleItem ={this.state.toggleItem}
       />
       <Form 
       addItem ={this.addItem}
       />
       <button onClick ={()=> {this.clearTodo()}} >Clear Todo </button>
      </div>
    )
  }
}
