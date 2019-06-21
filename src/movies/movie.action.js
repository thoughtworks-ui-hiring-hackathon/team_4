export const addMovie = (movie) => (dispatch) => {
	dispatch({
		type: 'ADD_MOVIE',
		payload: movie
	})
};