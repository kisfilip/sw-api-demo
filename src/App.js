import React from 'react';

import Header from './components/Header.js';
import Description from './components/Description.js';
import RequestButton from './components/RequestButton.js';
import OutputList from './components/OutputList.js';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numOfChars: 0,
      charData: null
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people/')
    .then(results => {
    return results.json();
    }).then(data => {
      this.setState({numOfChars: data.count});
    })
  }

  handleClick = () => {
    fetch(`https://swapi.co/api/people/${Math.ceil(Math.random() * this.state.numOfChars)}`)
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({charData: data});
    })
  }

  render() {
    return (
      <div className="App">
        <section className="Main-section">
          <Header />
          <Description numOfChars={this.state.numOfChars} />
          <RequestButton handleClick={this.handleClick}/>
          <OutputList charData={this.state.charData}/>
        </section>
      </div>
    );
  }
}

export default App;
