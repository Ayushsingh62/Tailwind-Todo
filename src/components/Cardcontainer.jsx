import React from 'react'
import Card from './Card'

const Cardcontainer = ({ todos, deleteTodo, editTodo }) => {
  // console.log(todos)
  return (
    <div>

      {todos.map((todo) => {

        return <Card key={todo?.id} todo={todo} deleteTodo={deleteTodo} editTodo={editTodo} />
      })}




    </div>
  )
}

export default Cardcontainer
