import _ from 'lodash';

export const _latestMovies = (state) => {
	const movies = [];
	_.get(state, 'homePage.latestMovies', []).map(id => {
		movies.push(state.movie[id]);
	});
	return movies;
}