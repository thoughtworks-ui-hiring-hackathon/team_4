import React from 'react';
import {getMovieDetails} from '../../movies/movies.api';
import './MovieDetails.scss';

export default class MovieDetails extends React.PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			movie: null,
		};
	}


	componentDidMount() {
		const {match} = this.props;

		getMovieDetails(match.params.id).then(res => {
			this.setState({
				movie: res,
			});
		});
	}

	render() {
		const {movie} = this.state;
		if (!movie) {
			return <div/>
		}
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
						<div className='genre'>
							{movie.genres.map(g => g.name).join(',')}
						</div>
						<div className='cast'>
							{movie.credits.cast.map(g => g.name).join(',')}
						</div>
						<div className='director'>
							{movie.credits.crew.filter(g => g.department === 'Directing').map(g => g.name).join(',')}
						</div>
					</div>
				</div>
			</div>
		);
	}
}