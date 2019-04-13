import React, {Component} from 'react';
import GetWebsiteData from './getWebsiteData';
import $ from 'jquery'; 

class AddPost extends Component {
    state = {
        url: '',
        response: null,
        content: {
            heading: '',
            description: ''
        }
    };

    constructor () {
        super();
        this.handleInputValue = this.handleInputValue.bind(this);
        this.fetchWebsiteData = this.fetchWebsiteData.bind(this);
    }

    fetchWebsiteData = () => {
        const URL = "http://www.whateverorigin.org/get?url=" + encodeURIComponent(this.state.url) + "&callback=?";

        $.getJSON(URL, function(response) {
            let find_heading = $(response.contents).filter('title'),
             //   find_description = $(response.contents).filter('description'),
                heading = find_heading[0].innerText;
             //   description = find_description[0].innerText;
            //    console.log(description)
                
                this.setState ({
                    response: response.status.http_code === 200 ? 200 : 500,
                    content: {
                        heading: heading ? heading : 'No Heading',
                  //      description: description ? description : 'No Description'
                    }
                })
        }.bind(this));
    };

    handleInputValue = ({target}) => {
        this.setState({
            url: target.value
        });
    }

    render () {
        if (this.state.response === 200) {
            return (
                <React.Fragment>
                    <div className="ui column stackable center aligned page grid">
                        <div className="ui input action">
                            <input type="text" placeholder="Enter the post link" value={this.state.url} onChange={this.handleInputValue} style={{width: '500px'}} />
                            <button className="ui button" onClick={this.fetchWebsiteData}>Get</button>
                        </div>
                    </div>
                    <br />
                    <GetWebsiteData heading={this.state.content.heading} />
                    <br /><br />
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <div className="ui one column stackable center aligned page grid">
                        <div className="ui input action">
                            <input type="text" placeholder="Enter the post link" value={this.state.url} onChange={this.handleInputValue} style={{width: '500px'}} />
                            <button className="ui button" onClick={this.fetchWebsiteData}>Fetch</button>
                        </div>
                    </div>
                    <br /><br />
                </React.Fragment>
            );
        }
      
    };
}
export default AddPost;