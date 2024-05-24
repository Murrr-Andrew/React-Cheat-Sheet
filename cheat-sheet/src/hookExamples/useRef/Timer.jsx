import { useRef, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  const increment = () => {
    countRef.current++;

    setCount(countRef.current);
  };

  const logCount = () => {
    console.log(`Count value: ${countRef.current}`);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={logCount}>Log Count</button>
    </div>
  );
}

export default Timer;
