import React from 'react'
import Todo from "../components/Todo"

const TodoList =props =>{
  

    return (
      <div>
        {props.todo.map(todo => (
          <Todo
          key={todo.id}
          todo ={todo}
          toggleItem ={props.toggleItem}
          />
        ))}
      </div>
    )
}
export default TodoList