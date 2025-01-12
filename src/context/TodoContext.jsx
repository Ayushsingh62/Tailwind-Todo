import { createContext, useState } from "react";

const TodoContext = createContext()


export const TodoProvider = ({ children }) => {
   
     const [todos, setTodos] = useState([
       
       
      //  {
      //    id: 2,
      //    title: "name",
      //    description: "some description"
   
      //  }
   
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

    
    setEdit({isEdit:false , todo:{}})
  }
    return (
        <TodoContext.Provider value={{todos , edit, addTodo , deleteTodo , editTodo, updateTodo}}> 
        {children}
        </TodoContext.Provider>
    )
}


export default TodoContext