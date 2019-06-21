import {combineReducers} from 'redux';
import homePageReducer from '../components/home/Home.reducer';
import movieReducer from '../movies/Movie.reducer';

export default combineReducers({
	homePage: homePageReducer,
	movie: movieReducer
});