import { useState } from 'react';
import './style.css';

const Content = (props) => {
    let [classname, style] = useState("")
    const onDelete = (e)=>{
        props.deleteTask(e);
        console.log('Task deleted');
    }
    const task = props.task;
    // let classname = "";

    const onComplete = (index)=>{
        !task.isCompleted?classname = "completed" : classname ="";
        props.onTaskComplete(index);
        style(classname)
    };

    return (
        <>
        <tr className={classname}>
            <td>{props.id +1}</td>
            <td
                id = {props.id}
                onClick={(e)=>onComplete(e.target.id)}
                >
                {task.task}</td>
            <td>
                <img 
                    src="https://img.icons8.com/ios/50/000000/edit.png" 
                    alt="Edit" 
                    width="20px" 
                    height="20px"     
                /> 
                <img 
                    src="https://img.icons8.com/ios/50/000000/delete-sign.png" 
                    alt="Delete" 
                    width="20px" 
                    height="20px"
                    name = {props.id}
                    onClick={(e)=>onDelete(e.target.name)} 
                />
            </td>
        </tr>
        </>
    )
}

export default Content;