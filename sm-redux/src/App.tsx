import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState, AppDispatch } from "./state/store";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
} from "./state/counter/counterSlice";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispath = useDispatch<AppDispatch>();

  return (
    <>
      <div>
        <div>
          <h1>{count}</h1>
        </div>
        <div>
          <button onClick={() => dispath(increment())}>Increment</button>
          <button onClick={() => dispath(decrement())}>Decrement</button>
          <button onClick={() => dispath(incrementByAmount(2))}>
            Increment By 2
          </button>
          <button onClick={() => dispath(incrementAsync(3))}>
            IncrementAsync
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
