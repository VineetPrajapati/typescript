import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const CounterUsingContext = () => {
  const { count, increment, decrement } = useContext(CounterContext);
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterUsingContext;
