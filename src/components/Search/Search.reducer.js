export default (state = {}, action = {}) => {
    const {type, payload = {}} = action;
	switch (type) {
        case 'GET_SEARCHED_RESULTS':
            return {
                ...state,
                movies: payload
            };
        default:
            return state;
    }
}