import React, { Component } from 'react'
import Post from './Post';
// import PropTypes from 'prop-types';

export class PostList extends Component {

    render() {
        return (
            <div className="postList">
                {this.props.posts.map((post, i) => {
                    return <Post post={post} key={i} />
                })}
            </div>
        )
    }
}

export default PostList
