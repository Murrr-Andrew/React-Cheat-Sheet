import { useCallback, useState } from "react";
import Child from "./Child";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h1>useCallback Example</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment Count</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <Child onButtonClick={increment} />
    </div>
  );
}

export default App;
