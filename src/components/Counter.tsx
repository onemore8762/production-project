import React, {useState} from 'react';
import classes from './Counter.module.scss'
const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () =>{
        setCount(count + 1)
    }

    return (
        <div>
            <div>{count}</div>
            <button className={classes.btn} onClick={increment}>+</button>
        </div>
    );
};

export default Counter;