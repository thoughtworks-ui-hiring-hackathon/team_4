import React from 'react';
import {getMovieDetails} from '../../movies/movies.api';
import {getRelatedMovies} from './MovieDetails.actions';
import {connect} from 'react-redux';
import {getRelatedMoviesSelector} from './MovieDetails.selector';
import MovieList from '../../common/MovieList/MovieList';
import {Link} from "react-router-dom";
import './MovieDetails.scss';

class MovieDetails extends React.PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			movie: null,
		};
	}

	loadPageData = (id) => {
		getMovieDetails(id).then(res => {
			this.setState({
				movie: res,
			});
		});

		this.props.getRelatedMovies(id);
	}

	componentDidMount() {
		const {match} = this.props;
		this.loadPageData(match.params.id);
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		const {match} = this.props;
		if (prevProps.match.params.id !== match.params.id) {
			this.loadPageData(match.params.id);
		}
	}

	render() {
		const {movie} = this.state;
		const {relatedMovies} = this.props;
		if (!movie) {
			return <div/>
		}
		console.log(relatedMovies);
		return (
			<div className='movie-details'>
				<div className='poster'>
					<img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}/>
				</div>
				<div className='title-details'>
					<div className='left-section'>
						<div className='name'>{movie.original_title}</div>
						<div className='description'>{movie.overview}</div>
					</div>
					<div className='right-section'>
						<div className='field genre'>
							<div className='label'>Genre:</div>
							<div className='value'>{movie.genres.map(g => g.name).join(',')}</div>
						</div>
						<div className='field cast'>
							<div className='label'>Cast:</div>
							<div className='value'>{
								movie.credits.cast.map(g => {
									return (<div className='link'>
										<Link to={`/actor/${g.id}`}>
											<span>{g.name},</span>
										</Link>
									</div>)
								})
								}
							</div>
						</div>
						<div className='field director'>
							<div className='label'>Director:</div>
							<div className='value'>
								{movie.credits.crew.filter(g => g.department === 'Directing').map(g => g.name).join(',')}
							</div>
						</div>
					</div>
				</div>
				<div className='related-movies'>
					<div className='title'>Related Movies</div>
					<MovieList movies={relatedMovies}/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	relatedMovies: getRelatedMoviesSelector(state)
})

const mapDispatchToProps = dispatch => ({
	getRelatedMovies: (...args) => dispatch(getRelatedMovies(...args)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);