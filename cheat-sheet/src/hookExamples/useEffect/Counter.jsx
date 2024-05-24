import { useEffect, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Click</button>
    </div>
  );
}

export default Counter;
