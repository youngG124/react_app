import './App.css';
import React, { Component } from 'react';
import TOC from './components/TOC.js';
import ReadContent from './components/ReadContent.js'
import Subject from './components/Subject.js'
import Control from './components/Control.js'
import CreateContent from './components/CreateContent.js'

// git clone to push test(2022.1.28.20:48)


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_content_id:3,
      mode:'create',
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
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === 'read') {
      var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title,_desc){
        console.log(_title,_desc);
      }.bind(this)}></CreateContent>
    }
    return (
      <div className="App">
      <Subject 
        title= { this.state.subject.title }
        sub= { this.state.subject.sub }
        toMain={function(){
          this.setState({mode:'welcome'});        
        }.bind(this)}
        >
      </Subject>
      <TOC
        onChangePage={function(id){
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
          }); // 상위 컴포넌트 변경은 state의 변경으로
        }.bind(this)} // 하위 컴포넌트에 명령할 때는 props에 바로 접근
        data = { this.state.contents }>
      </TOC>
      <Control onChangeMode={function(_mode) {
        this.setState({
          mode:_mode
        })
      }.bind(this)}></Control>
      {_article}
    </div>
    );
  }
}

export default App;
