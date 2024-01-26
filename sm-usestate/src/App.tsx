import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function handleOnIncrement() {
    setCount((count: number) => count + 1);
  }
  function handleOnDecrement() {
    setCount((count: number) => count - 1);
  }
  return (
    <>
      <div>
        <h1>{count}</h1>
      </div>
      <div>
        <button onClick={handleOnIncrement}>Increment</button>
        <button onClick={handleOnDecrement}>Decrement</button>
      </div>
    </>
  );
}

export default App;
