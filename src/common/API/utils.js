import {token} from './token';

export const buildURL = (url) => {
	return url + `&api_key=${token}`
}