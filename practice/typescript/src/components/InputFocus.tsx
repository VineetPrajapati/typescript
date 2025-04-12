import { useRef } from "react";

const InputFocus = () => {
  const inputFocus = useRef<HTMLInputElement>(null);
  const handleFocus = () => {
    inputFocus.current?.focus();
  }
  return (
    <div>
      <input type="text" placeholder="Input focus" ref={inputFocus} />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
};

export default InputFocus;
