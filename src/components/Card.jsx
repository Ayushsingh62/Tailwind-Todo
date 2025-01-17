import React, { useContext } from 'react'
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import TodoContext from '../context/TodoContext';
const Card = ({ todo }) => {
  // console.log(todo)


const{dispatch}=useContext(TodoContext)

const handleRemove =(id)=>{
dispatch ({

  type:"Remove_TODO",
  payload :id
})

}

const handleEdit =(todo)=>{
  dispatch ({
  
    type:"EDIT_TODO",
    payload :todo
  }) }


  const { deleteTodo, editTodo } = useContext(TodoContext)
  return (
    <div   >
      <div  >

        <div className=' border p-5 rounded-md  shadow-sm relative' >
          <h1 className='text-2xl font-bold '>
            {todo.title}

          </h1>
          <p className='text-sm font-semibold '>
            {todo.description}

          </p>
          <span className=' flex gap-2 absolute top-3 right-2'>
            <button className='text-yellow-400' onClick={() => handleEdit(todo)} > <FaEdit />
            </button>
            <button className='text-red-400' onClick={() => handleRemove(todo.id)} ><RiDeleteBin2Fill />
            </button>
          </span>

        </div>




      </div>
    </div>
  )
}

export default Card
