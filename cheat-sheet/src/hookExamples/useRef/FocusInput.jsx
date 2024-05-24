import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus me"
      />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default FocusInput;
