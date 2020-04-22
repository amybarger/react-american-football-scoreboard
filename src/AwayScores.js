import React from "react";
import { useState } from "react";

function AwayScores() {
    
const [awayScore, setAwayScore] = useState(0);

return (
    <div className="away">
     <h2 className="away__name">Tigers</h2>
        <div className="away__score">{`${awayScore}`}
        </div>
            <div className="awayButtons">
                <button className="awayButtons__touchdown" onClick={() => {
            setAwayScore(awayScore + 7);
          }}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => {
            setAwayScore(awayScore + 3);
          }}>Away Field Goal</button>
        </div>
    </div>
);}

export default AwayScores;