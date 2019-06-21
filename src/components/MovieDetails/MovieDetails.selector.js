import _ from 'lodash';

export const getRelatedMoviesSelector = (state) => {
	const movies = [];
	_.get(state, 'movieDetails.relatedMovies', []).map(id => {
		movies.push(state.movie[id]);
	});
	return movies;
};