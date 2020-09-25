import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import AuthenticatedRoute from './AuthenticatedRoute';

import Home from "pages/Home";
import About from "pages/About";
import Login from "pages/Login";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" render={Home}/>
				<AuthenticatedRoute path="/about" component={About}/>
				<Route path="/login" component={Login}/>
			</Switch>
		</Router>
	);
}

export default App;
