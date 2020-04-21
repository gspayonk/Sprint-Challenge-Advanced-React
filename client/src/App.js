import React from 'react';
import './App.css';
import axios from 'axios';

//importing hooks
import Navigation from "./components/DarkModeNav";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  //axios call with method that renders after component output rendered to DOM
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")

      .then(response => {
        console.log(response);
        this.setState({ data: response.data});
        console.log(this.state);
      })

      .catch(error => console.log(error))
  }

  render() {

    return (

      <div>
        <div className="header">

          <Navigation />

          <h1 className='playerheader'>Players: </h1>

        </div>
        
        <div className="wrapper">
          
          {/* mapping through players and rendering cards */}
          {this.state.data.map(player => {
            return (
              <div className="card" key={player.id}>
                <h3>{player.name}</h3>
                <p>{player.country}</p>
              </div>
            );
          
          })}
        </div>
      </div>
    )
  }
}

export default App;