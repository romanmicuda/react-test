import { useState } from "react";

interface Props {
  onClick: () => Promise<void> | void;
  children: React.ReactNode;
}

export function ActionButton(props: Props) {
  const { onClick, children } = props;
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  console.log("ACTION BUTTON RERENDER")

  const onClickHandler = async () => {
    setError(false)
    setLoading(true)
    try {
      const result = await Promise.resolve(onClick())
    } catch (error) {
      setError(true)
    } 
    setLoading(false)
  } 

  return <button onClick={onClickHandler}>
    {loading && 'loading'}
    {error && 'ERROR'}
    {children}
  </button>;
}

/**
 Make this button to show "loading" text when onClick function returns Promise 
 and show "ERROR" when the promise fails.
 Return the original text/children when promise ends.
 */

/*
expert question - why mnemoisation of this component won't help?
*/
