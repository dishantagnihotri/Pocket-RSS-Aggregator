import React, {Component} from 'react';

class Login extends Component {
    state = {
        username: '',
        password: '',
        error: '',
        tempUsername: 'admin',
        tempPassword: 'admin'
    };

    constructor (props) {
        super(props);

        this.inputChangedHandler = this.inputChangedHandler.bind(this);
        this.checkLoginInfo = this.checkLoginInfo.bind(this);
    }

    checkLoginInfo = (e) => {
        e.preventDefault();

        const { username, password, returnUrl } = this.state;

        console.log('username', username)
        console.log('password', password)

        if (!(username && password)) {
            this.setState({ error: 'Please fill both the fields.' })
            return;
        }
        
        if (this.state.tempUsername === username) {
            if (this.state.tempPassword === password) {
                const { from } = this.props.location.state || { from: { pathname: "/" } };
                this.props.history.push(from);
            } else {
                this.setState({ error: 'Password not matched.' })
            }
        } else {
            this.setState({ error: 'There is no user with this username.' })
        }
    };
    
    inputChangedHandler = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render () {
        const { username, password, error } = this.state;
        return (
            <div className="ui middle aligned center aligned grid">
                <div className="column" style={{maxWidth: 450}}>
                    <h2 className="ui image header">Log-in to your account</h2>
                    <form className="ui large form" onSubmit={this.checkLoginInfo}>
                        {error &&
                            <div className="ui stacked secondary segment">
                                <p>{error}</p>
                            </div>
                        }
                        <div className="ui stacked secondary segment">
                            <div className="field">
                                <div className="ui input">
                                    <input type="text" name="username" placeholder="E-mail address" 
                                           value={username} onChange={(e)=>this.inputChangedHandler(e)} />
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui input">
                                    <input type="password" name="password" placeholder="Password" 
                                           value={password} onChange={(e)=>this.inputChangedHandler(e)} />
                                </div>
                            </div>
                            <button type="submit" className="ui fluid large teal submit button">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Login;