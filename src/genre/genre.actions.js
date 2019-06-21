import {buildURL} from '../common/API/utils';

export const getGenre = () => (dispatch, state) => {
	fetch(buildURL('https://api.themoviedb.org/3/genre/movie/list?language=en-US'))
	.then(res => res.json())
	.then(res => {
		dispatch({
			type: 'UPDATE_GENRE',
			payload: res.genres
		});
	});
};