
import React, { useContext, useState } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Cardcontainer from './components/Cardcontainer'
import Footer from './components/Footer'
import { TodoProvider } from './context/TodoContext'
import ThemeContext from './context/ThemeContext'

 const App = () => {

  const {theme}= useContext(ThemeContext)

  return (
  <TodoProvider>

<div className={ theme? "relative min-h-screen bg-gray-700" :'relative min-h-screen'}>
      <Navbar />

      <div className={' relative min-h-screen container mx-auto p-2 p-10 '}>

        <Form
        //  addTodo={addTodo} edit={edit} updateTodo={updateTodo} 
         />
        <Cardcontainer 
        // todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} 
        />


      </div>
      <Footer />


    </div>
  </TodoProvider>
  )
}

export default App
