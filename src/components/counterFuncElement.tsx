import { useState } from "react";

const CounterFuncElement = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>;
};

export default CounterFuncElement;
