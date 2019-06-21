import {buildURL} from '../common/API/utils';

export const getMovieDetails = (id) => {
	return fetch(buildURL(`https://api.themoviedb.org/3/movie/${id}?language=en-US&append_to_response=credits`))
	.then(res => res.json());
}