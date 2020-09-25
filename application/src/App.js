import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import Home from "pages/Home";
import About from "pages/About";
import SignUp from 'pages/SignUp';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" render={Home}/>
				<Route path="/about" render={About}/>
				<Route path="/signup" render={SignUp}/>
			</Switch>
		</Router>
	);
}

export default App;
