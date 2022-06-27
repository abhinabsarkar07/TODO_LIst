import React, {useState, useEffect} from "react" ;
import "./App.css" ;
//Importing Components
import Form from "./components/Form" ;
import TodoList from './components/Todolist';

function App (){
  //state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredtodos,setFilteredTodos] = useState([]);
  
  //use effect
  useEffect(() => {
    filterHandler();
  }, [todos, status]);


  //run once
  useEffect(() => {
    getLocalTodos();
  }, []);

  //functions
  const filterHandler = () =>{
    switch (status){
      case'completed':
      setFilteredTodos(todos.filter(todo => todo.completed === true))
      break;
      case 'uncompleted':
      setFilteredTodos(todos.filter(todo => todo.completed === false))
      break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }


  //save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
     let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }
  return(
    <div className="App">
      <header>
        <h1>TODO LIST</h1>
      </header>
      <Form
      inputText={inputText} 
      setInputText={setInputText}
      todos={todos}
      setTodos={setTodos}
      setStatus={setStatus}
      /> 
      <TodoList
       setTodos={setTodos}
        todos={todos}
        filteredlist={filteredtodos}
      />
      </div>
  );
};

export default App;