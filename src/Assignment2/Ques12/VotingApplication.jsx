// Create a simple voting application using the useReducer hook.
// Set up a reducer to manage the votes for different options.
// Create buttons representing voting options.
// Use the useReducer hook to access the votes state and dispatch actions.
// Allow users to vote for their preferred options.
// Display the current vote count for each option.

import React, { useReducer } from "react";

const initialState = { bjpCount: 0, aapCount: 0 };

const reducer = (state, action) => {
  switch (action) {
    case "BJP":
      return { ...state, bjpCount: state.bjpCount + 1 };
    case "AAP":
      return { ...state, aapCount: state.aapCount + 1 };
    default:
      return state;
  }
};

function VotingApplication() {
  const [vote, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>BJP Votes: {vote.bjpCount}</p>
      <p>AAP Votes: {vote.aapCount}</p>
      <button onClick={() => dispatch("BJP")}>Vote for BJP</button>
      <button onClick={() => dispatch("AAP")}>Vote for AAP</button>
    </>
  );
}

export default VotingApplication;
