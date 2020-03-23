import React, { Component } from 'react'
// import PropTypes from 'prop-types';

export class WritePost extends Component {
    state = {
        title: '',
        content: '',
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div>
                <input
                    type="text"
                    name="title"
                    placeholder="Title..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    type="text"
                    name="content"
                    placeholder="What's on your mind?"
                    value={this.state.content}
                    onChange={this.onChange}
                />
            </div>
        )
    }
}

export default WritePost
