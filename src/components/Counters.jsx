import React, { useState } from 'react';

const Counters = () => {
    const [count, setCount] = useState(0)


    function Increment() {
        setCount(count + 1)
    }

    function Decrement() {
        setCount(count - 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={Increment}>Incrementes</button>
            <button onClick={Decrement}>Decrement</button>
        </div>

    );
};

export default Counters;