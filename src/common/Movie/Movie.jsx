import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {getGenreNames} from '../../genre/genre.selector';
import './Movie.scss';

class Movie extends React.PureComponent {

	render() {
		const {data, genre} = this.props;
		return (
			<div className='movie'>
				<div className='poster'>
					<img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}/>
				</div>
				<div className='name'>
					{data.original_title}
				</div>
				<div className='genre'>{genre.join(',')}</div>
				<div className='footer'>
					{/*<div className='popularity'>
						5 star
					</div>*/}
					<div className='link'>
						<Link to={`/details/${data.id}`}>show more</Link>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	genre: getGenreNames(state, props.data.genre_ids),
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
