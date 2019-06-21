export default (state = {}, action = {}) => {
    const {type, payload = {}} = action;
	switch (type) {
        case 'GET_ACTOR_DETAILS':
            return {
                ...state,
                ...payload
            };
        default:
            return state;
    }
}