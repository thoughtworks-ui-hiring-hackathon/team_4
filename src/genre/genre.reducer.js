export default (state = {}, action) => {
	switch (action.type) {
		case 'UPDATE_GENRE': {
			return action.payload;
		}
		default:
			return state;
	}
}