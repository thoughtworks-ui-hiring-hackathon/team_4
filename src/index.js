import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import configureStore from './store';
import './scss/_index.css';
import Home from './components/home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails'
import Search from './components/Search/Search';
import Header from './components/Header/Header';
import ActorDetails from './components/ActorDetails/ActorDetails'

ReactDOM.render(
	<Provider store={configureStore()}>
		<Router>
			<Header/>
			<Switch>
				<Route path="/details/:id" component={MovieDetails}/>
				<Route path="/actor/:id" component={ActorDetails}/>
				<Route path="/search" component={Search}/>
				<Route path="/" component={Home}/>
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('root')
);