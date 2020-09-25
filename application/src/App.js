import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import AuthenticatedRoute from './AuthenticatedRoute';

import Home from "pages/Home";
import About from "pages/About";
import Login from "pages/Login";
import SignUp from 'pages/SignUp';

import Navbar from "layouts/Navbar";
import Footer from "layouts/Footer";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route path="/login" component={Login} />
				{/* <AuthenticatedRoute path="/about" component={About} />
				<AuthenticatedRoute path="/home" component={Home} /> */}
				<AuthenticatedRoute path="/signup" component={SignUp}/>
			</Switch>
		</Router>
	);
}

export default App;
