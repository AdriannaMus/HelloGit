import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      wyswietl: "lewy",
    }
    this.przycisnieto= this.przycisnieto.bind(this);
  }

  przycisnieto(){
    console.log("tu trzeba coś zmienić :)")
    //TODO: sprawić, by raz wyswietlał się przycisk z lewej a raz z prawej storny
  }

  render() {
    return (
      <div className="App">
        {this.state.wyswietl === "lewy" ? 
        (
          <div onClick={this.przycisnieto} className="btn lewy">Lewy</div>
        ) : 
        (
          <div onClick={this.przycisnieto} className="btn prawy">Prawy</div>
        )}
      </div>
    );
  }
}

export default App;
