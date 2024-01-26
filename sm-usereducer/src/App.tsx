import { useReducer } from "react";
import "./App.css";

interface State {
  count: number;
  error: string | null;
}

interface Action {
  type: "increment" | "decrement";
}

function reducer(state: State, action: Action) {
  const { type } = action;
  switch (type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0, error: null });

  function handleOnIncrement() {
    dispatch({ type: "increment" });
  }
  function handleOnDecrement() {
    dispatch({ type: "decrement" });
  }
  return (
    <>
      <div>
        <h1>{state.count}</h1>
      </div>
      <div>
        <button onClick={handleOnIncrement}>Increment</button>
        <button onClick={handleOnDecrement}>Decrement</button>
      </div>
    </>
  );
}

export default App;
