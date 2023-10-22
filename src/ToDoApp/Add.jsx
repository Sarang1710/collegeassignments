import { useState } from "react";

const Add = (props)=>{
    let [task,settask] = useState("");
    const onInputChange = (value)=>{
        settask(task = value);

    };

    const onButtonClick = ()=>{
        if(task!=="") {
            props.addTask(task);
            settask(task = "");
        }
    };
    return(
        <div className="add">
            <input type="text" value={task} placeholder="Add a task" onChange={(e)=>onInputChange(e.target.value)}  />
            <button onClick={onButtonClick}>Add</button>
        </div>
    );
}

export default Add;