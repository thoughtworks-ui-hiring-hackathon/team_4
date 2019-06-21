export default (state = {}, action) => {
	switch (action.type) {
		case 'UPDATE_LATEST_MOVIES': {
			return {
				...state,
				latestMovies: action.payload,
			};
		}
		case 'UPDATE_TRENDING_MOVIES': {
			return {
				...state,
				trendingMovies: action.payload,
			};
		}
		case 'UPDATE_POPULAR_MOVIES': {
			return {
				...state,
				popularMovies: action.payload,
			};
		}
		default:
			return state;
	}
} 