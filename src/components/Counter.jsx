import { useState } from "react";

export function Counter(props) {
    const [count, setCount] = useState(props.initialValue);
    //let count = 0;

    function addOne() {
        setCount (count + props.step);
    }
    
    function subtractOne() {
        setCount (count - props.step);
    }

    return (
        <>
            <button onClick={addOne}>+</button>
            <span>{count.toFixed(props.precision || 0)}</span>
            <button onClick={subtractOne}>-</button>
        </>
);

}