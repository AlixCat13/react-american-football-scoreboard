//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(0)
  const [awayScore, setAwayScore] = useState(0)

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">ASU</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">40:00</div>
          <div className="away">
            <h2 className="away__name">UNT</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__Try" onClick={() => setHomeScore(homeScore + 4)}>Home Try</button>
          <button
          className="homeButtons__Goal_Kick" onClick={() => setHomeScore(homeScore + 2)}>Home Goal Kick</button>
          <button
          className="homeButtons__Penalty_Kick" onClick={() => setHomeScore(homeScore + 2)}>Home Penalty Kick</button>
          <button className="homeButtons__Drop_Goal" onClick={() => setHomeScore(homeScore + 1)}>Home Drop Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__Try" onClick={() => setAwayScore(awayScore + 4)}>Away Try</button>
          <button className="awayButtons__Goal_Kick" onClick={() => setAwayScore(awayScore + 2)}>Away Goal Kick</button>
          <div className="awayButtons">
          <button className="awayButtons__Penalty_Kick" onClick={() => setAwayScore(awayScore + 2)}>Away Penalty Kick</button>
          <button className="awayButtons__Drop_Goal" onClick={() => setAwayScore(awayScore + 1)}>Away Drop Goal</button>
        </div>
      </div>
    </section>
  </div>
  );
}

export default App;
