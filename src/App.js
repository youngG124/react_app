import './App.css';
import React, { Component } from 'react';
import TOC from './components/TOC.js';
import Content from './components/Content.js'
import Subject from './components/Subject.js'
import MyComponent from './components/MyComponent.js'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Subject title="WEB" sub="world wide web!"></Subject>
      <Subject title="React" sub="For UI"></Subject>
      <MyComponent A="first content, " B="second, " C="third"></MyComponent>
      <TOC></TOC>
      <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
    </div>
    );
  }
}

export default App;
