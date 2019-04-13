import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from './components/header';
import AddPost from './components/addPost';
import GetUsersPosts from './components/getUsersPosts';
import Notfound from './components/404';
import SinglePost from './components/SinglePost';
import login from './components/login';

const routing = (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/add" component={AddPost} />
                <Route path="/your-posts" component={GetUsersPosts} />
                <Route path="/post/:id" component={SinglePost} />
                <Route path="/login" component={login} />
                <Route component={Notfound} />
            </Switch>
        </Router>
    )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
