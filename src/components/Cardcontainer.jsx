import React, { useContext } from 'react'
import Card from './Card'
import TodoContext from '../context/TodoContext'

const Cardcontainer = () => {
  // console.log(todos)

  const  {todos} =useContext(TodoContext);
  return (
    <div  className= ' my-5  grid grid-cols-1 md:grid-cols-4 gap-4 '>

      {todos.map((todo) => {

        return <Card key={todo?.id} todo={todo}
        
        // deleteTodo={deleteTodo} 
        // editTodo={editTodo}
         />
      })}




    </div>
  )
}

export default Cardcontainer
