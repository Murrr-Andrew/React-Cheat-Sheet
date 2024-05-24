import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(() => seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  return <div>Seconds: {seconds}</div>;
}

export default Timer;
