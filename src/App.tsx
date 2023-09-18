import React, { useCallback, useState } from "react";
import { ActionButton } from "./ActionButton";
import { failingSleep, sleep } from "./utils";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  const decrement = useCallback(
    () => setCount(count - 1)
  , [count]);

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <ActionButton onClick={handleClick}>Increment</ActionButton>
      <ActionButton onClick={decrement}>Decrement</ActionButton>
      {/* <ActionButton onClick={() => sleep().then(() => setCount(currentCount => currentCount - 1))}>
        Delayed Decrement
      </ActionButton>
      <ActionButton
        onClick={() => failingSleep().then(() => setCount(count - 1))}
      >
        Failing Action
      </ActionButton>
      <ActionButton onClick={() => setCount(0)}>Reset</ActionButton> */}
    </div>
  );
}

/*
question: which of the callback styles do you preffer and why?
- try to fix the code (what are the obvious errors?)
- rewrite .then() with async/await
*/

export default App;
