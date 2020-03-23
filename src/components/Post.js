import React, { Component } from 'react';
// import PropTypes from 'prop-types';


export class Post extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.post.title}</h3>
                <p>{this.props.post.content}</p>
            </div>
        )
    }
}

export default Post