import React from 'react';
import MovieList from '../../common/MovieList/MovieList';
import {getLatestMovies, getTrendingMovies, getPopularMovies} from './Home.action';
import {latestMoviesSelector, trengindMoviesSelector, popularMoviesSelector} from './Home.selector';
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
		const {latestMovies, trendingMovies, mostWatchedMovies} = this.props;
		return (
			latestMovies && trendingMovies && mostWatchedMovies &&
			<React.Fragment>
				<div className="movie-carousel">
					<h1>Latest Movies</h1>
					<MovieList movies={latestMovies}/>
				</div>
				<div className="movie-carousel">
					<h1>Trending Movies</h1>
					<MovieList movies={trendingMovies}/>
				</div>
				<div className="movie-carousel">
					<h1>Most Watched</h1>
					<MovieList movies={mostWatchedMovies}/>
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => ({
	latestMovies: latestMoviesSelector(state),
	trendingMovies: trengindMoviesSelector(state),
	mostWatchedMovies: popularMoviesSelector(state)
})

const mapDispatchToProps = dispatch => ({
	getLatestMovies: () => dispatch(getLatestMovies()),
	getTrendingMovies: () => dispatch(getTrendingMovies()),
	getPopularMovies: () => dispatch(getPopularMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);