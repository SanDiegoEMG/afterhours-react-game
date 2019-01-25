import React from 'react';

function Scoreboard(props) {
    return (
        <div className="container">
      <header>
        <div className="row">
          <div className="col-sm-4">
            <h4> React 'til the end!</h4>
          </div>
          <div className="col-sm-4">
          <h2> Score: {props.score} | Tally: {props.tally} </h2>
        </div>
        <div className="col-sm-4">
          <h4>Or get outta the way!</h4>
        </div>
      </div>
      </header>
      </div>
    )
}


export default Scoreboard;