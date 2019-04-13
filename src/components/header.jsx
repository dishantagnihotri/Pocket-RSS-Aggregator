import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Header extends Component {
    state = {
        links: [{
                title: 'Add Post',
                link: '/add'
            }, {
                title: 'Your Posts',
                link: '/your-posts'
            }
        ]
    };

    render () {
        return (
            <div className="ui container secondary menu" 
                 style={{
                     marginBottom: 50,
                     padding: '10px',
                     borderBottom: '1px solid #ddd'
                 }}>
                  <NavLink className="item" to="/" activeClassName="none">
                    <img src="https://i2.wp.com/banjos.com.au/wp-content/uploads/2016/05/instagram-Logo-PNG-Transparent-Background-download.png" />
                  </NavLink>
                    {this.state.links.map(link => (
                        <NavLink key={link.title} to={link.link} className="item" activeClassName="active">{link.title}</NavLink>
                    ))}
                    <div className="right menu">
                        <div className="item">
                            <div className="ui icon input">
                                <input type="text" placeholder="Search..." />
                                <i className="search link icon"></i>
                            </div>
                        </div>
                        <Link to="login" className="ui item" href="/">Login</Link>
                    </div>
            </div>
        )
    }
}
export default Header;