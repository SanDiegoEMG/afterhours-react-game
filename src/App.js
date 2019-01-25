import React, { Component } from "react";
import "./App.css";
import cards from "./cards_data.json";
import Scoreboard from "./components/Scoreboard/Scoreboard"
import Card from "./components/ImageCard/ImageCard"

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
    <div className="container"> 
      <Scoreboard
        score={this.state.score} 
        tally={this.state.tally}
        />
        <div className="row">
        {this.state.bunnies.map(bunny => (
          <Card 
            key={bunny.id}
            id={bunny.id}
            name={bunny.name}
            image={bunny.image}
            handleClicked={this.handleClicked}
          />
        ))}
        </div>

        <Scoreboard />
    </div>

    );
  }
}

export default App;
