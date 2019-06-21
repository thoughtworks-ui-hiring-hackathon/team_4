import React from 'react';
import Movie from '../Movie/Movie';
import './MovieList.scss';

export default class MovieList extends React.PureComponent {

	render() {
		const {movies = []} = this.props;
		return (
			<div className='movies'>
				{
					movies.map(movie =>
						<Movie key={movie.id} data={movie}/>
					)
				}
			</div>
		);
	}
}