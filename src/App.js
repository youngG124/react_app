import './App.css';
import React, { Component } from 'react';

class Subject extends Component {
  render() {
    return (
      <header>
            <h1>Web</h1>
            world wide web!
      </header>
    );
  }
}

class Navigator extends Component {
  render() {
    return (
      <nav>
            <ul>
                <li><a href="1.html"></a>HTML</li>
                <li><a href="2.CSS"></a>CSS</li>
                <li><a href="3.JavaScript">JavaScript</a></li>
            </ul>
        </nav>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <Subject></Subject>
      <Navigator></Navigator>
    </div>
    );
  }
}

export default App;
