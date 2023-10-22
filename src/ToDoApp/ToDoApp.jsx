import Add from "./Add";
import Content from "./Content";
import { useState } from "react";

const ToDoApp = ()=>{
    let [tasks, setTasks] = useState([]);

    const handleCallback = (data)=>{
        setTasks([...tasks,{task: data , isCompleted: false}]);
    }
    let rows = [];
    const content = ()=>{
        tasks.forEach((task,i)=>{
            rows.push(<Content task ={task} key = {i} id = {i} deleteTask = {deleteTask} onTaskComplete= {onComplete}/>);
        })
        return rows;
    };

    const deleteTask = (index)=>{
        tasks.splice(index,1);
        setTasks([...tasks]
            );
    }
    const onComplete = (index)=>{
        tasks[index].isCompleted = !tasks[index].isCompleted;
        setTasks([...tasks]);
    }
    return (
        <>
        <h1>ToDoApp</h1>
        <Add addTask = {handleCallback} />
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Task</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {content()}
            </tbody>
        </table>
        </>
    );
}

export default ToDoApp;