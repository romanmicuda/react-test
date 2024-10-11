import React, { useCallback, useState } from "react";
import { ActionButton } from "./ActionButton";
import { failingSleep, sleep } from "./utils";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = useCallback(
    () => setCount((prevCount) => prevCount - 1),
    []
  );

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <ActionButton onClick={handleIncrement}>Increment</ActionButton>
      <ActionButton onClick={decrement}>Decrement</ActionButton>
      <ActionButton
        onClick={async () => {
          await sleep();
          setCount((currentCount) => currentCount - 1);
        }}
      >
        Delayed Decrement
      </ActionButton>
      <ActionButton
        onClick={async () => {
          await failingSleep();
          setCount((currentCount) => currentCount - 1);
        }}
      >
        Failing Action
      </ActionButton>
      <ActionButton onClick={() => setCount(0)}>Reset</ActionButton>
    </div>
  );
}

/*
question: which of the callback styles do you preffer and why?

I prefer the useCallback style, as seen in the decrement function, because it prevents unnecessary re-renders of the function and allows for explicit control over when the function should be recreated.

- try to fix the code (what are the obvious errors?)
stale closure issue

- rewrite .then() with async/await
*/

export default App;
