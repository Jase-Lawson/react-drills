import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ['alpha', 'beta', 'charlie', 'delta', 'echo', 'foxtrot', 'golf', 'hotel', 'india', 'juliet', 'kilo', 'lima', 'mike', 'november', 'oscar', 'papa', 'quebec', 'romeo', 'sierra', 'tango', 'uniform', 'victor', 'whiskey', 'x-ray', 'yankee', 'zulu'],
    }
  }



  render() {
    let displayList = this.state.list.map((el, index) => {
      return <h2 key={index}>{el}</h2>
    })
    return (
      <div className="App" >
        {displayList}
      </div >
    );
  }
}

export default App;