import _ from 'lodash';

export const getGenreNames = (state, ids) => {
	return ids.map((id) => {
		return _.get(state, 'genre').find(g => g.id === id).name;
	})
};