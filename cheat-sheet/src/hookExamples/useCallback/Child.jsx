/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { memo } from "react";

const Child = ({ onButtonClick }) => {
  console.log("Child component rendered");
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={onButtonClick}>Increment from Child</button>
    </div>
  );
};

export default memo(Child);
