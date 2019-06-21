import {combineReducers} from 'redux';
import simpleReducer from './simple-reducer';
import homePageReducer from '../components/home/Home.reducer';
import movieReducer from '../components/home/Movie.reducer';

export default combineReducers({
	homePage: homePageReducer,
	movie: movieReducer
});