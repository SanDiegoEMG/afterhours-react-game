import React, { Component } from "react";
import "./App.css";
import cards from "./cards_data.json";
import Scoreboard from "./components/Scoreboard/Scoreboard"
import Card from "./components/ImageCard/ImageCard"

class App extends Component {
  // anything that is in the state, is something that can be dynamically changed through user interaction
  state = {
    randomId: 0,
    score: 0,
    tally: 0,
    bunnies: cards
  };

  componentDidMount() {
    this.setNewRandomId(this.state.bunnies)
  }

  setNewRandomId = (array) => {
    let randomId = array[Math.floor(Math.random()*array.length)].id;
    this.setState({
      randomId: randomId
    })
    console.log(randomId);
  }

  handleClicked = id => {
    console.log(`clicked bunny with id# ${id}`);
    if (this.state.randomId === id) {
      this.setState ({
        score: this.state.score +1
      })
    }
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
