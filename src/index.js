import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import configureStore from './store';
import './scss/_index.css';
import Home from './components/home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails'

ReactDOM.render(
	<Provider store={configureStore()}>
		<Router>
			<Switch>
				<Route path="/details/:id" component={MovieDetails}/>
				<Route path="/" component={Home}/>
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('root')
);