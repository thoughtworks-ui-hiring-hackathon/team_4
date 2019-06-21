import _ from 'lodash';

export const moviesSelector = (state) => {
    const movies = [];
	_.get(state, 'searchPage.movies', []).map(id => {
		movies.push(state.movie[id]);
	});
	return movies;
}