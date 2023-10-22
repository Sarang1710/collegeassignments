import {useState} from 'react';

const SetCounterComponent = ()=>{
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Sarang');
    const changeCount = ()=>{
        setCount(count+1);
        setName('Sarang Valiyaparambath');
    }


    return(
        <div>
            <h1>Counter Component</h1>
            <h2>Counter: {count}</h2>
            <h2>Name: {name}</h2>
            <button onClick={changeCount}>Add Counter</button>
        </div>
    )
}

export default SetCounterComponent;
