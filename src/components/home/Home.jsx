import React from 'react';
import MovieList from '../../common/MovieList/MovieList';
import {getLatestMovies, getTrendingMovies, getPopularMovies} from './Home.action';
import {_latestMovies} from './Home.selector';
import {connect} from 'react-redux';

class Home extends React.PureComponent {

	constructor() {
		super();
		this.state = {};
	}

	componentDidMount() {
		this.props.getLatestMovies();
		this.props.getTrendingMovies();
		this.props.getPopularMovies();
	}

	render() {
		const {latestMovies: movie} = this.props;
		return (
			<MovieList movies={movie}/>
		);
	}
}

const mapStateToProps = state => ({
	latestMovies: _latestMovies(state)
})

const mapDispatchToProps = dispatch => ({
	getLatestMovies: () => dispatch(getLatestMovies()),
	getTrendingMovies: () => dispatch(getTrendingMovies()),
	getPopularMovies: () => dispatch(getPopularMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);