import { useState } from "react";

interface Props {
  onClick: () => Promise<void> | void;
  children: React.ReactNode;
}

export function ActionButton(props: Props) {
  const { onClick, children } = props;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    setError(false);
    try {
      const result = onClick();
      if (result instanceof Promise) {
        await result;
      }
    } catch (err) {
      console.log("error happend");
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleClick} disabled={loading}>
      {loading ? "loading" : error ? "ERROR" : children}
    </button>
  );
}

/**
 Make this button to show "loading" text when onClick function returns Promise 
 and show "ERROR" when the promise fails.
 Return the original text/children when promise ends.
 */

/*
expert question - why mnemoisation of this component won't help?
Memoization helps avoid re-renders when props and state have not changed.
However, in this case, the state changes with every user interaction.

*/
