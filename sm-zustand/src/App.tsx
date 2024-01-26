import { useEffect } from "react";
import "./App.css";
import { useCounterStore } from "./state/store";

// accessing store outside of component
const counterLog = () => {
  const count = useCounterStore.getState().count;
  console.log("Count: ", count);
};

function App() {
  const count = useCounterStore((state) => state.count);

  return (
    <>
      <OtherComponent count={count} />
    </>
  );
}

const OtherComponent = ({ count }: { count: number }) => {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);

  useEffect(() => {
    counterLog();
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={incrementAsync}>IncrementAsync</button>
      </div>
    </div>
  );
};
export default App;
