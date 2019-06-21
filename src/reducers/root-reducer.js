import {combineReducers} from 'redux';
import homePageReducer from '../components/home/Home.reducer';
import movieReducer from '../movies/Movie.reducer';
import movieDetailsReducer from '../components/MovieDetails/MovieDetails.reducer';
import actorDetailsReducer from '../components/ActorDetails/ActorDetails.reducer';
import genreReducer from '../genre/genre.reducer';
import searchReducer from '../components/Search/Search.reducer'

export default combineReducers({
	homePage: homePageReducer,
	movie: movieReducer,
	movieDetails: movieDetailsReducer,
	actorDetails: actorDetailsReducer,
	genre: genreReducer,
	searchPage: searchReducer
});