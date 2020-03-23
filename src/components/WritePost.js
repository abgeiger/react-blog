import React, { Component } from 'react'
// import PropTypes from 'prop-types';

export class WritePost extends Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.newPostTitle} />
                <input type="text" value={this.props.newPostContent} />
            </div>
        )
    }
}

export default WritePost
