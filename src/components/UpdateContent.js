import React, { Component } from 'react';

class UpdateContent extends Component {
    render() {
      console.log(this.props.data);
      console.log('UpdateContent render');
      return (
        <article>
          <h2>Update</h2>
          <form action="/create_process" method="post"
            onSubmit={function(e){
              e.preventDefault();
              this.props.onSubmit(
                e.target.title.value,
                e.target.desc.value
              );
              alert("Submitted");
            }.bind(this)}>
            <p><input type="text" name="title" 
            defaultValue={this.props.data.title}></input></p>
            <p>
              <textarea name="desc" 
              defaultValue={this.props.data.desc}></textarea>
            </p>
            <p><input type="submit"></input></p>
          </form>
        </article>
      );
    }
  }


export default UpdateContent