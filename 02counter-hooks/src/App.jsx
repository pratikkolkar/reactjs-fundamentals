import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(10);

  const addValue = () => {
    if (count < 20) {
      setCount(count + 1);
      /*
      setCount(count + 1); -> setCount((prevCount) => prevCount + 1 )
      setCount(count + 1); -> setCount((prevCount) => prevCount + 1 ) 
      setCount(count + 1); -> setCount((prevCount) => prevCount + 1 )
      setCount(count + 1); -> setCount((prevCount) => prevCount + 1 )
      */
      // You might say answer will be count + 5, but it will counter + 1 value, 
      // this is because react process in batch and it ignores as the setter method repeating
      // We can overcome this by using callback function which will call previous value and updates it.
      
    }
  };
  const removeValue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>React Hook - useSate()</h1>
      <h2>Counter: {count}</h2>
      <button 
      onClick={addValue}> 
      Add Value {count}
      </button>
      <br />
      <button 
      onClick={removeValue}>
        Remove Value {count}
        </button>
    </>
  );
}

export default App;
