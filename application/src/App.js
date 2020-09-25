import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import Home from "pages/Home";
import About from "pages/About";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" render={Home}/>
				<Route path="/about" render={About}/>
			</Switch>
		</Router>
	);
}

export default App;
