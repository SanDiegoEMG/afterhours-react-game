import React, { Component } from "react";
import "./App.css";
import cards from "./cards_data.json";

class App extends Component {
  // anything that is in the state, is something that can be dynamically changed through user interaction
  state = {
    score: 0,
    tally: 0,
    bunnies: cards
  };

  render() {
    return (
    <div> 
      <div className="container">
      <header>
        <div className="row">
          <div className="col-sm-4">
            <h4> React 'til the end!</h4>
          </div>
        <div className="col-sm-4">
          <h4>Or get outta the way!</h4>
        </div>
        <div className="col-sm-4">
          <h2> Score: {this.state.score} | Tally: {this.state.tally} </h2>
        </div>
      </div>
      </header>
      </div>

      <div className="container">
        <div className="row">
          {this.state.bunnies.map(bunny => (
            <div 
              key={bunny.id}
              className="bun-card col-md-4" 
              style={{backgroundImage: `url(${bunny.image})`}}>
              <p>{bunny.name}</p>
            </div>
           ))}
        </div>

        <div className="row">  </div>

    </div>
    </div>

    );
  }
}

export default App;
