import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: ''
    }
  }

  handleChange(val) {
    this.setState({ message: val })
  }

  render() {
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} />
        <h3>Type above and Text appears below!</h3>
        <h3>{this.state.message}</h3>
      </div>
    );
  }
}

export default App;
