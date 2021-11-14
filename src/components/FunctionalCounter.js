import {useState, useEffect} from 'react';

function FunctionalCounter({text}) {
    const [count, setCount] = useState(0);
    const [showText, setShowText] = useState(true)

    useEffect(() => {
        console.log('useEffect Executed!')

        // Cleanup function dönüyorsa bu fonksiyon component unmount olurken calışacak
        return () => {
            console.log('usEffect unmount')
        }
    }, [count])

    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);
    const increment = () => setCount(count + 1);

    const toggleText = () => setShowText(showText ? false : true)

    return (
        <div>
            <h3>Functional Count: {count}</h3>

            <button onClick={decrement}>Decrement -</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment +</button>

            <div>
                {showText ? <p>Toggle this text!</p> : null}

                <button onClick={toggleText}>Toggle Text</button>
            </div>
        </div>
    )
}

export default FunctionalCounter;
