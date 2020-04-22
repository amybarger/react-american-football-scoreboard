//TODO: STEP 1 - Import the useState hook.
import React from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import HomeScores from "./HomeScores";
import AwayScores from "./AwayScores";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  return (
    <div className="container">
       <h1>Let's Play Ball!</h1>
      <section className="scoreboard">
        <div className="topRow">
          <div className="timer">00:03</div>
        </div>
        <HomeScores />
        <AwayScores />
        <BottomRow />
      </section>
      <section className="buttons">
      </section>
    </div>
  );
}

export default App;
