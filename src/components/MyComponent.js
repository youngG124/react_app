import React, { Component } from 'react';

class MyComponent extends Component {
    render() {
        return (
            <article>
                {this.props.A}
                {this.props.B}
                {this.props.C}
            </article>
        );
    }
}

export default MyComponent