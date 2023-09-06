import { useEffect, useState } from "react";
import axios from 'axios'
import Search from "./components/Search";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";

function App() {
  const [todos, setTodos] = useState([]);
  const[errors, setErrors] = useState("")

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/todos")
    .then( res => setTodos(res.data))
    .catch(err => setErrors(err.message))
  }, [])


// add todo function
  const addTodo = (data) => {
    setTodos( [ ...todos, data={...data, id:parseInt(todos[todos.length-1].id) + 1, status:"Active"}] )
    const originalTodos = [...todos]
    axios.post("http://127.0.0.1:8000/todos", data)
    .then(res => {
      setTodos([...todos, res.data])
    })
    .catch(err => {
      setErrors(err.message)
      setTodos(originalTodos)
    }) 
  }

  // delete function
  const delTodo = (id) => {
    setTodos(todos.filter( todo => todo.id != id ))
    const originalTodos = [...todos]
    axios.delete("http://127.0.0.1:8000/todos/" + id)
    .catch(err => {
      setErrors(err.message)
      setTodos(originalTodos)
    })  
  }


  // update function
  const updateTodo = (e, id, text, todo) => {
    e.preventDefault();
    console.log("id:", id);
    console.log("todo:", todo);
    const updatedUser = { ...todo, task: text, status: "Active" };
    setTodos(todos.map(t => t.id == todo.id ? updatedUser : t));
  
    const updatedTodo = { ...todo, task:text}
    axios.patch("http://127.0.0.1:8000/todos/" + id, updatedTodo)
  };
  

  const completeTodo = (e, id, todo) => {

    if(e.target.checked){
      console.log("okay")
      setTodos(todos.map(todo => todo.id == id ? { ...todo, completed:true}: todo))
      const updatedTodo = { ...todo, completed:true}
      axios.patch("http://127.0.0.1:8000/todos/" + id, updatedTodo)
    }
    else
    {
      console.log("omo")
      setTodos(todos.map(todo => todo.id == id ? { ...todo, completed:false}: todo))
      const updatedTodo = { ...todo, completed:fasle}
      axios.patch("http://127.0.0.1:8000/todos/" + id, updatedTodo)
    }
   
  }




  return (
    <div className="todo-container">
      <h1>Todo Lists</h1>
      { errors && <p>{errors}</p> }
      <Search addTodo = { addTodo } />
      <TodoList todos = { todos } delTodo = { delTodo } update_todo = { updateTodo } complete_todo = { completeTodo } />
    </div>
  );
}



export default App;