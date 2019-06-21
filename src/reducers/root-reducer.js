import {combineReducers} from 'redux';
import homePageReducer from '../components/home/Home.reducer';
import movieReducer from '../movies/Movie.reducer';
import movieDetailsReducer from '../components/MovieDetails/MovieDetails.reducer';
import genreReducer from '../genre/genre.reducer';

export default combineReducers({
	homePage: homePageReducer,
	movie: movieReducer,
	movieDetails: movieDetailsReducer,
	genre: genreReducer
});