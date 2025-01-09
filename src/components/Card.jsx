import React from 'react'
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
const Card = ({ todo, deleteTodo, editTodo }) => {
  // console.log(todo)
  return (
    <div>
      <div className='my-5  grid grid-cols-1 md:grid-cols-4 gap-4 '>

        <div className=' border p-5 rounded-md  shadow-sm relative' >
          <h1 className='text-2xl font-bold '>{todo.title}</h1>
          <p className='text-sm font-semibold '>{todo.description}</p>
          <span className=' flex gap-2 absolute top-3 right-2'>
            <button className='text-yellow-400' onClick={() => editTodo(todo)} > <FaEdit />
            </button>
            <button className='text-red-400' onClick={() => deleteTodo(todo.id)} ><RiDeleteBin2Fill />
            </button>
          </span>

        </div>




      </div>
    </div>
  )
}

export default Card
