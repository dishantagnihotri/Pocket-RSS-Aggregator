import React, { Component } from 'react';
import SinglePostLayout from './singlePostLayout';

class AllPostsLayout extends Component {
    state = {
    };

    render () {
        return (
            <div className="ui container">
                <div className="ui four column grid">
                    {this.props.posts.map(post => (
                        <div key={post.id} className="column">
                            <SinglePostLayout post={post} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
export default AllPostsLayout;