import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      filterList: '',
      list: ['circle', 'triangle', 'square', 'pentagon', 'hexagon', 'septagon', 'octagon',],
    };

  }

  handleChange(filter) {
    this.setState({ filterList: filter })
  }


  render() {
    let displayList = this.state.list
      .filter((el, i) => { return el.includes(this.state.filterList); })
      .map((el, i) => { return <h2 key={i}>{el}</h2> })
    return (
      <div className="App" >
        < input onChange={e => this.handleChange(e.target.value)} />
        { displayList}
      </div>
    )
  }
}
export default App;
