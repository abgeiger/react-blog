import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export class WritePost extends Component {
    // The title and content for the new post
    state = {
        title: '',
        content: '',
    }

    // Handles changes to the new post's title and content
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    // Sumbmits the new post to the Post List
    onSubmit = (e) => {
        e.preventDefault();
        // If statement requires there to be a title and content in order to submit new post
        if (this.state.title !== '' && this.state.content !== '') {
            const newPost = {
                title: this.state.title,
                content: this.state.content,
            }

            this.props.createPost(newPost);

            this.setState({
                title: '',
                content: '',
            });
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
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
                <input
                    type="submit"
                    value="Submit"
                />
                <br />
                {this.state.title}
                <br />
                {this.state.content}
            </form>
        )
    }
}

export default WritePost
