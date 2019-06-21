export const getMovies = (oneWay) => {
	return (dispatch) => {
		dispatch({
			type: 'GET_ALL_MOVIES',
			payload: {movies}
		});
	};
};