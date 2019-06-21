import _ from 'lodash';

export const latestMoviesSelector = (state) => {
	const movies = [];
	_.get(state, 'homePage.latestMovies', []).map(id => {
		movies.push(state.movie[id]);
	});
	return movies;
}

export const trengindMoviesSelector = (state) => {
	const movies = [];
	_.get(state, 'homePage.trendingMovies', []).map(id => {
		movies.push(state.movie[id]);
	});
	return movies;
}

export const popularMoviesSelector = (state) => {
	const movies = [];
	_.get(state, 'homePage.popularMovies', []).map(id => {
		movies.push(state.movie[id]);
	});
	return movies;
}