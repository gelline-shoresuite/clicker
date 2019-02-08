import React, { Component } from 'react';
import './App.css';
import Clicker from './Clicker';

class App extends Component {
  constructor(props){
    super(props);

    this.state ={
     
    }
  }


  render() {

    return (
      <div className="App">

        <div>
          <Clicker />

          
        </div>

        <div>
          <div>

          </div>
          <div>

          </div>
        </div>

      </div>
    );
  }
}

export default App;
