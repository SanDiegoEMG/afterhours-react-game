import React, { Component } from "react";
import "./App.css";
import cards from "./cards_data.json";
import Scoreboard from "./components/Scoreboard/Scoreboard"

class App extends Component {
  // anything that is in the state, is something that can be dynamically changed through user interaction
  state = {
    score: 0,
    tally: 0,
    bunnies: cards
  };


  handleClicked = id => {
    console.log(`clicked bunny with id# ${id}`);
    this.setState ({
      tally: this.state.tally + 1,
      score: this.state.score + 2
    })
  }


  render() {
    return (
    <div> 

      <Scoreboard
        score={this.state.score} 
        tally={this.state.tally}
        />

      <div className="container">
          <div className="row">
            {this.state.bunnies.map(bunny => (
              <div 
                style={{backgroundImage: `url(${bunny.image})`}}
                key={bunny.id}
                className="bun-card col-md-3" 
                onClick={() => this.handleClicked(bunny.id)}
                >
                <p>{bunny.name}</p>
              </div>
            ))}
         </div>  

        <div className="row">  </div>

       </div>

        <Scoreboard />
    </div>

    );
  }
}

export default App;
