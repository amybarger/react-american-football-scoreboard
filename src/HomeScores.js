import React from "react";
import { useState } from "react";

function HomeScores() {

const [homeScore, setHomeScore] = useState(0);

    return (<div className="home">
                <h2 className="home__name">Lions</h2>

                {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

                <div className="home__score">
                {`${homeScore}`}
                </div>
                
                <div className="homeButtons">
            {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
            <button className="homeButtons__touchdown"onClick={() => {
                setHomeScore(homeScore + 7);
            }}>Home Touchdown</button>
            <button className="homeButtons__fieldGoal" onClick={() => {
                setHomeScore(homeScore + 3);
            }}>Home Field Goal</button>
            </div>
        </div>
    );
}

export default HomeScores;