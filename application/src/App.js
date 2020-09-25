import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import AuthenticatedRoute from './AuthenticatedRoute';

import Home from "pages/Home";
import About from "pages/About";
import Login from "pages/Login";

import Navbar from "layouts/Navbar";
import Footer from "layouts/Footer";

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path="/" render={Home}/>
					<Route path="/about" component={About}/>
					<Route path="/login" component={Login}/>
				</Switch>
			</Router>
		</div>

	);
}

export default App;
