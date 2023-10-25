import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SetCounterComponent = () => {
    const [count, setCount] = useState(0);
    const addCount = () => setCount(count + 1);
    const decreaseCount = () => setCount(count - 1);

    return (
        <div>
            <h1>Counter Component</h1>
            <h2>Counter: {count}</h2>
            <button className='btn btn-success' onClick={addCount}>Add Counter</button>
            <button className='btn btn-danger mx-3' onClick={decreaseCount}>Remove Counter</button>
        </div>
    )
}

export default SetCounterComponent;
