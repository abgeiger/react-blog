import React, { Component } from 'react'
// import PropTypes from 'prop-types';

export class WritePost extends Component {
    state = {
        title: '',
        content: '',
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();

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
