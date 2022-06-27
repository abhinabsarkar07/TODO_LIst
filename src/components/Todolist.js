
import React from "react";
import Todo from "./Todo"
//importing components

const Todolist = ({todos,setTodos,filteredlist}) => {
    return(
        <div className="todo-container">
             <ul className="todo-list">
            {filteredlist && filteredlist.map(todo => (
            <Todo setTodos={setTodos} todos={todos} key={todo.id} text={todo.text} todo={todo}/>
             ))}
             </ul>
    
    </div> 
        );
};


export default Todolist;

