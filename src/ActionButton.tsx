interface Props {
  onClick: () => void;
  children: React.ReactNode;
}
export function ActionButton(props: Props) {
  const { onClick, children } = props;
  return <button onClick={onClick}>{children}</button>;
}

/**
 Make this button to show "loading" text when onClick function returns Promise 
 and show "ERROR" when the promise fails.
 Return the original text/children when promise ends.
 */

/*
expert question - why mnemoisation of this component won't help?
*/
