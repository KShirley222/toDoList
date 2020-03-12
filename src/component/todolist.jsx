import React, { useState } from 'react';


const Todo = props =>{

    const [todoList, setTodoList] = useState([
        {text: "This is the first task", isComplete: false},
        {text: "This is the second task", isComplete: false},
    ]);
    
    const [formState, SetFormState] = useState({
        text : "",
    });


    const completeTask = event =>{
        let complete = [...todoList];
        complete[event.target.value].isComplete = true;
        setTodoList(complete);
        
    }

    const notComplete = event =>{
        let complete = [...todoList];
        complete[event.target.value].isComplete = false;
        setTodoList(complete);
    }

    const deleteTask = e =>{
        let remove = [...todoList];
        remove.splice(e.target.value,1);
        setTodoList(remove);
    }
    
    const addTask = e =>{
        e.preventDefault();
        let text = formState.text;
        let isComplete = false;
        let newTask = {text, isComplete};
        setTodoList([...todoList, newTask]);
        console.log(todoList);
        console.log(newTask);
        
    }

    const changeHandler = e =>{
        SetFormState({
            ...formState, [e.target.name]: e.target.value
        });

    }

    return(
        <div className = "container">
            <h1> TODO LIST</h1>
            <div className ="row">
                <form onSubmit = {addTask}>
                    <label 
                    className = "col-md-4">
                    Add a task
                    </label>
                    <input 
                    type = "text" 
                    className = "col-md-4" 
                    name ="text"
                    onChange = {changeHandler}
                    />
                    <input type ="submit" 
                    className = "col-md-4" 
                    />
                </form>
            </div>
            <table className = "table table-striped">
                <thead>
                <tr className ="row">
                    <th className = "col-md-4">Task</th>
                    <th className = "col-md-4">Completed</th>
                    <th className = "col-md-4">Delete</th>
                </tr>
                </thead>
                <tbody>
                {
                    todoList.map( (task, i) =>
                    <tr className="row" key ={ i }>
                        {task.isComplete===true ? <td className = "col-md-4" style={{textDecoration:"line-through"}}>{task.text}</td>:<td className = "col-md-4">{task.text}</td>}
                        {task.isComplete ? <td className = "col-md-4"><button onClick = {notComplete} value = {i}>Not Complete</button></td>: <td className = "col-md-4"><button onClick = {completeTask} value ={i}>Complete</button></td>}
                        <td className = "col-md-4"><button onClick = {deleteTask} value = {i} >Delete</button></td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )

}

export default Todo;