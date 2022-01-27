import './App.css';
import React, { Component } from 'react';
import TOC from './components/TOC.js';
import Content from './components/Content.js'
//import Subject from './components/Subject.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:'welcome',
      subject:{title : 'WEB', sub : 'World Wide Web!'}, //subject라는 프로퍼티에 값 하나
      welcome:{title:'Welcome', desc:"Hello, React!"},
      contents:[ // contents라고하는 property를 state에 추가
        {id:1, title:'HTML', desc:'html is HyperText...'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }

  render() {
    console.log('App render');
    var _title, _desc = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
      {/* <Subject 
        title= { this.state.subject.title }
        sub= { this.state.subject.sub }>
      </Subject> */}
      <header>
              <h1><a href="/" onClick={function(e){
                console.log(e);
                e.preventDefault();
                this.state.mode = 'welcome';
              }.bind(this)}>{this.state.subject.title}</a></h1>
              {this.state.subject.sub}
      </header>
      <TOC
        data = { this.state.contents }>
      </TOC>
      <Content title={_title} desc={_desc}></Content>
    </div>
    );
  }
}

export default App;
