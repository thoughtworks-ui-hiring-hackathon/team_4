import _ from 'lodash';

export const getGenreNames = (state, ids) => {
	return ids.map((id) => {
		const gen =_.get(state, 'genre').find(g => g.id === id);
		return gen ? gen.name: null; 
	}).filter(c=>c);
};