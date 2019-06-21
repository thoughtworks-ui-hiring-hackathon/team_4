import {buildURL} from '../../common/API/utils';

export const getActorDetails = ({actorId}) => (dispatch) => {
    return fetch(buildURL(`https://api.themoviedb.org/3/person/${actorId}?language=en-US`)).then(res => {
		return res.json();
	}).then(res => {
		dispatch({
            type: "GET_ACTOR_DETAILS",
            payload: res
        });
	});
}