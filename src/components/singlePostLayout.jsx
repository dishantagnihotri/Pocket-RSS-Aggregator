import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SinglePostLayout extends Component {
    state = {
        id: this.props.post.id,
        image: this.props.post.imgSrc,
        title: this.props.post.title,
        publishedAt: this.props.post.publishedAt,
        description: this.props.post.description,
        link: this.props.post.link
    };
    
    render () {
        return (
            <div className="ui card">
                <img src={this.state.image} className="ui image" alt="Something"/>
                <div className="content">
                    <div className="header">{this.state.title}</div>
                    <div className="meta">
                        <span className="date">{this.state.publishedAt}</span>
                    </div>
                    <div className="description">{this.state.description}</div>
                </div>
                <div className="extra content">
                    <Link to="post/2">Open this Post</Link>
                </div>
            </div>
        )
    }
}
export default SinglePostLayout;