import {buildURL} from '../../common/API/utils';
import {addMovie} from '../../movies/movie.action';

const updateLatestMovies = (movies) => {
	return {
		type: 'UPDATE_LATEST_MOVIES',
		payload: movies
	};
};

const updateTrendingMovies = (movies) => {
	return {
		type: 'UPDATE_TRENDING_MOVIES',
		payload: movies
	};
};

const updatePopularMovies = (movies) => {
	return {
		type: 'UPDATE_POPULAR_MOVIES',
		payload: movies
	};
};

export const getLatestMovies = () => (dispatch) => {
	return fetch(buildURL('https://api.themoviedb.org/3/movie/now_playing?&language=en-US&page=1')).then(res => {
		return res.json();
	}).then(res => {
		const latestMovies = [];
		res.results.map(movie => {
			latestMovies.push(movie.id);
			dispatch(addMovie(movie));
		});
		dispatch(updateLatestMovies(latestMovies));
	});
};

export const getTrendingMovies = () => (dispatch) => {
	return fetch(buildURL('https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=1')).then(res => {
		return res.json();
	}).then(res => {
		const trendingMovies = [];
		res.results.map(movie => {
			trendingMovies.push(movie.id);
			dispatch(addMovie(movie));
		});
		dispatch(updateTrendingMovies(trendingMovies));
	});
};

export const getPopularMovies = () => (dispatch) => {
	return fetch(buildURL('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1')).then(res => {
		return res.json();
	}).then(res => {
		const popularMovies = [];
		res.results.map(movie => {
			popularMovies.push(movie.id);
			dispatch(addMovie(movie));
		});
		dispatch(updatePopularMovies(popularMovies));
	});
};