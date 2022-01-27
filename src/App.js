import './App.css';
import React, { Component } from 'react';
import TOC from './components/TOC.js';
import Content from './components/Content.js'
import Subject from './components/Subject.js'
import MyComponent from './components/MyComponent.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject:{title : 'WEB', sub : 'World Wide Web!'},
      contents:[
        {id:1, title:'HTML', desc:'html is HyperText...'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }

  render() {
    return (
      <div className="App">
      <Subject 
        title= { this.state.subject.title }
        sub= { this.state.subject.sub }>
        </Subject>
      <Subject title="React" sub="For UI"></Subject>
      <MyComponent A="first content, " B="second, " C="third"></MyComponent>
      <TOC
        data = { this.state.contents }
      ></TOC>
      <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
    </div>
    );
  }
}

export default App;
