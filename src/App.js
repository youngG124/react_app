import './App.css';
import React, { Component } from 'react';
import TOC from './components/TOC.js';
import ReadContent from './components/ReadContent.js'
import Subject from './components/Subject.js'
import Control from './components/Control.js'
import CreateContent from './components/CreateContent.js'
import UpdateContent from './components/UpdateContent.js'


// git clone to push test(2022.1.28.20:48)


class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id=3;
    this.state = {
      selected_content_id:3,
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
  getReadContent() {
    var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          return data;
          break;
        }
        i = i + 1;
      }
  }
  getContent() {
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} 
      desc={_desc}></ReadContent>

    } else if(this.state.mode === 'read') {
      var _content = this.getReadContent();      
      _article = <ReadContent title={_content.title} 
      desc={_content.desc}></ReadContent>

    } else if(this.state.mode === 'create') {
      _article = <CreateContent 
      onSubmit={function(_title,_desc){
        // add contnet to this.state.contents
        this.max_content_id = this.max_content_id + 1;
        // this.state.contents.push(
        //   {id:this.max_content_id, title:_title, desc:_desc}
        // );
        var _contents = this.state.contents.concat(
          {id:this.max_content_id, title:_title, desc:_desc}
        );
        this.setState({
          contents:_contents
        });
      }.bind(this)}></CreateContent>

    } else if(this.state.mode === 'update') {
      _content = this.getReadContent();
      _article = <UpdateContent data={_content}
      onSubmit={
        function(_id,_title,_desc){
          // 원본을 바꾸지 않음.
          var _contents = Array.from(this.state.contents);
          var i = 0;
          while(i < _contents.length) {
            if(_contents[i].id === _id) {
              _contents[i] = {id:_id, title:_title, desc:_desc};
              break;
            }
            i = i + 1;
          }
          this.setState({
            contents:_contents,
            mode:'read',
            selected_content_id:this.max_content_id
          });
        }.bind(this)}></UpdateContent>
    }
    return _article;
  }

  render() {    
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
          });
        }.bind(this)}
        data = { this.state.contents }>
      </TOC>
      <Control onChangeMode={function(_mode) {
        if(_mode === 'delete') {
          if(window.confirm('really?')){
            var _contents = Array.from(this.state.contents);
            var i = 0;
            while(i < _contents.length) {
              if(_contents[i].id === this.state.selected_content_id) {
                _contents.splice(i, 1);
                break;
              }
              i = i + 1;
            }
            this.setState({
              mode:'welcome',
              contents:_contents
            });
            alert('deleted');
          }
        } else {
          this.setState({
            mode:_mode
          });
        }
        this.setState({
          mode:_mode
        })
      }.bind(this)}></Control>
      {this.getContent()}
    </div>
    );
  }
}

export default App;
