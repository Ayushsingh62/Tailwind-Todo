import React, { useContext, useEffect, useState } from 'react'
import TodoContext from '../context/TodoContext'


const Form = () => {



  const {dispatch , edit }=useContext(TodoContext)

  console.log(edit)
  const {addTodo , updateTodo}=useContext(TodoContext)
  const [title, setTitle] = useState("")
  const [description, setDecription] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

!edit.isEdit ?

dispatch({  
type :"ADD_TODO",
payload:{id:crypto.randomUUID(), title , description}

}) :
dispatch({  
  type :"UPDATE_TODO",
  payload:{id: edit.todo.id, title , description}
  
  })

    // if (edit.isEdit === false) {
    //   addTodo(title, description)


    // }
    // else {
    //   console.log(edit)
    //   updateTodo(edit.todo.id, title, description)
    // } 
    setTitle("")
    setDecription("")
  }

  useEffect(() => {
    setTitle(edit?.todo.title)
    setDecription(edit?.todo.description)


  }, [edit])

  return (
    <div>
      <form 
      onSubmit={handleSubmit} 
      >


        <input type="text" placeholder='Enter text' p className='border border-gray-400 p-2 w-full focus:outline-indigo-600 rounded-md m-2 placeholder-text-sm'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <textarea placeholder='Enter description' className='border border-gray-400 p-2 w-full focus:outline-indigo-600 rounded-md m-2'
          onChange={(e) => setDecription(e.target.value)}
          value={description}>


        </textarea>

        <button className='bg-green-600 w-full font-bold text-white rounded-md my-2 p-2 text-sm hover:bg-green-700 duration-150'>Submit</button>
      </form>
    </div>
  )
}

export default Form
