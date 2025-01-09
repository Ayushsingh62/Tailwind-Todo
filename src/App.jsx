
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Cardcontainer from './components/Cardcontainer'
import Footer from './components/Footer'
import { TodoProvider } from './context/TodoContext'

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Title",
      description: "some description"

    },
    
    // {
    //   id: 2,
    //   title: "name",
    //   description: "some description"

    // }

  ])
  const [edit, setEdit] = useState({ isEdit: false, todo: {}, })
  


  const addTodo = (title, description) => {
    setTodos([{ id: crypto.randomUUID(), title, description }, ...todos])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const editTodo = (todo) => {
    setEdit({ isEdit: true,  todo: todo })
    console.log(todo)

  }

  const updateTodo = (oldId, newTitle, newDescription) => {

    console.log(oldId, newTitle, newDescription)

    setTodos(todos.map(item => item.id === oldId ? {id : oldId , title : newTitle , description : newDescription} : item))

    
    // setEdit({isEdit:false , feedback:{}})
  }
  return (
  <TodoProvider>

<div className='relative min-h-screen'>
      <Navbar />

      <div className=' relative min-h-screen container mx-auto p-2 p-10 '>

        <Form addTodo={addTodo} edit={edit} updateTodo={updateTodo} />
        <Cardcontainer todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />


      </div>
      <Footer />


    </div>
  </TodoProvider>
  )
}

export default App
