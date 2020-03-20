import React, { Component } from 'react';
// import PropTypes from 'prop-types';

const blogPosts = [
    {
        id: 1,
        title: 'Post 1',
        content: 'Content of the first post.',
    },
    {
        id: 2,
        title: 'Post 2',
        content: 'Content of the second post.',
    },
    {
        id: 3,
        title: 'Post 3',
        content: 'Content of the third post.',
    },
];

export class Post extends Component {
    render() {
        return (
            <div>
                <h3>{blogPosts[1].title}</h3>
                <p>{blogPosts[1].content}</p>
            </div>
        )
    }
}

export default Post