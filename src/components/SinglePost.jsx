import React, {Component} from 'react';

class SinglePost extends Component {
    state = {
        id: this.props.id,
        title: this.props.title,
        description: this.props.description,
        image: this.props.image
    };

    render () {
        const { params } = this.props.match
        console.log(params)
        return (
            <div className="ui very padded segment">
                <img src={this.state.image} className="ui big image" title={this.state.title} />
                <div className="ui hidden divider"></div>
                <h1 className="ui header">{params.id}</h1>
                <p>this.state.description</p>
            </div>
        )
    }
}
export default SinglePost;