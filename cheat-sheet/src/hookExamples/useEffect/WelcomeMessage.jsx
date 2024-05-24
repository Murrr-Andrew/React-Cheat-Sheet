import { useEffect } from "react";

function WelcomeMessage() {
  useEffect(() => {
    console.log("Component did mount");
  }, []);

  return <div>Component did mount</div>;
}

export default WelcomeMessage;
