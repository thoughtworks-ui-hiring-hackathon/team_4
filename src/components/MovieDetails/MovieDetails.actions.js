import {buildURL} from '../../common/API/utils';
import {addMovie} from '../../movies/movie.action';


const updateRelatedMovies = (movies) => {
	return {
		type: 'UPDATE_RELATED_MOVIES',
		payload: movies
	};
};


export const getRelatedMovies = (id) => (dispatch) => {
	return fetch(buildURL(`https://api.themoviedb.org/3/movie/${id}/similar?&language=en-US&page=1`)).then(res => {
		return res.json();
	}).then(res => {
		const latestMovies = [];
		res.results.map(movie => {
			latestMovies.push(movie.id);
			dispatch(addMovie(movie));
		});
		dispatch(updateRelatedMovies(latestMovies));
	});
};