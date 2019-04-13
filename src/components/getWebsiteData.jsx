import React, {Component} from 'react';

class GetWebsiteData extends Component {
    state = {

    };

    render () {
        return (
            <div className="ui card centered">
                <div className="content">
                    <div className="header">{this.props.heading}</div>
                    <div className="description">
                        <p>Some description</p>
                    </div>
                </div>
                <div className="extra content">
                    <a className="left floated like">
                        <i className="like icon"></i>
                        Add Publically
                    </a>
                    <a className="right floated star">
                        <i className="star icon"></i>
                        Add Privately
                    </a>
                </div>
            </div>
        )
    }   
} 
export default GetWebsiteData;