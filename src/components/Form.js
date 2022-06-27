
import React from "react";


const Form = ({setInputText,inputText,todos,setTodos, setStatus, setCouunter}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value); 
    }; 
    const submitTodoHandler = (e) =>{
        e.preventDefault();
        console.log(todos);
        setTodos([
            ...todos,
            {text: inputText, completed: false, id: Math.random() }
        ]);
        setInputText("");
    };

const statusHandler = (e) => {
    setStatus(e.target.value);
}
    return(
        <form>
      <input value={inputText} onChange = {inputTextHandler} type="text" className="todo-input" />
      <button onClick = {submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <button type='reset'  onPress={() => {setCouunter(0)}}>Reset</button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
        );
}
export default Form;