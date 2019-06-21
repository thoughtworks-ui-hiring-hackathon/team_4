import {buildURL} from '../../common/API/utils';
import {addMovie} from '../../movies/movie.action';

export const getSearchResults = (search_query) => (dispatch) => {
    
	return fetch(buildURL(`https://api.themoviedb.org/3/search/multi?language=en-US&query=${search_query}&page=1&include_adult=false`)).then(res => {
		return res.json();
	}).then(res => {
        const searchRes = [];
		res.results.forEach(movie => {
			searchRes.push(movie.id);
			dispatch(addMovie(movie));
		});
		dispatch({
            type: 'GET_SEARCHED_RESULTS',
            payload: searchRes
        });
	});
};