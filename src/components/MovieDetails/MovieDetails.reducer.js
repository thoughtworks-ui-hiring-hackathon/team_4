export default (state = {}, action) => {
	switch (action.type) {
		case 'UPDATE_RELATED_MOVIES': {
			return {
				...state,
				relatedMovies: action.payload,
			};
		}
		default:
			return state;
	}
}