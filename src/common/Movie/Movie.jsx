import React from 'react';
import {Link} from "react-router-dom";
import './Movie.scss';

export default class Movie extends React.PureComponent {

	render() {
		const {data} = this.props;
		return (
			<div className='movie'>
				<div className='poster'>
					<img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}/>
				</div>
				<div className='name'>
					{data.original_title}
				</div>
				<div className='genre'>{data.genre_ids}</div>
				<div className='footer'>
					<div className='popularity'>
						5 star
					</div>
					<div className='link'>
						<Link to={`/details/${data.id}`}>show more</Link>
					</div>
				</div>
			</div>
		);
	}
}
