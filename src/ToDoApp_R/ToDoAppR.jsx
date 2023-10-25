import Add from "./Add";
import Content from "./Content";
import { useReducer } from "react";
import reducer ,{ initialState } from "./reducefunc";


const ToDoApp = ()=>{
    
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleCallback = (data)=>{
        dispatch({type: 'ADD_TASK', payload: data});
    }
    const deleteTask = (index)=>{
        dispatch({type: 'DELETE_TASK', payload: index});
    }
    const onComplete = (index)=>{
        dispatch({type: 'COMPLETE_TASK', payload: index});
    }

    let rows = [];
    const content = ()=>{
        state.forEach((task,i)=>{
            rows.push(<Content task ={task} key = {i} id = {i} deleteTask = {deleteTask} onTaskComplete= {onComplete}/>);
        })
        return rows;
    };
    return (
        <>
        <h1>ToDoApp</h1>
        <Add addTask = {handleCallback} />
        <table className="todoItem">
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