import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, reset} from "./counterSlice";

function CounterView() {
    const count = useSelector((state) => state.counter.count);
    console.log('count is ', count)
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(increment(5));
    };
    const handleDecrement = () => {
        dispatch(decrement())
    };
    const handleReset = () => {
        dispatch(reset())
    };

    return (
        <div className="App">
            <h3>Redux-toolkit Counter App</h3>
            <p>Count:{count}</p>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{margin: '5px'}}>
                    <button onClick={() => handleIncrement()}>Increment</button>
                </div>
                <div style={{margin: '5px'}}>
                    <button onClick={() => handleDecrement()}>Decrement</button>
                </div>
                <div style={{margin: '5px'}}>
                    <button onClick={() => handleReset()}>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default CounterView;