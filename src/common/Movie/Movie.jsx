import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {getGenreNames} from '../../genre/genre.selector';
import QuickView from './components/QuickView/QuickView';
import './Movie.scss';

class Movie extends React.PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			show: false,
		};
	}

	handleOnClose = (e) => {
		e.stopPropagation();
		this.setState({
			show: false
		});
	};

	handleOnCardClick = (e) => {
		e.stopPropagation();
		this.setState({
			show: true
		});
	}


	render() {
		const {show} = this.state;
		const {data, genre} = this.props;
		return (
			<div className='movie' onClick={this.handleOnCardClick}>
				<div className='poster'>
					<img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}/>
				</div>
				<div className='name'>
					{data.original_title}
				</div>
				<div className='genre'>{genre.join(', ')}</div>
				<div className='footer'>
					<div className='popularity'>{data.vote_average}</div>
					<div className='link'>
						<Link to={`/details/${data.id}`}>Show more</Link>
					</div>
				</div>
				<QuickView show={show} onClose={this.handleOnClose} data={data}/>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	genre: getGenreNames(state, props.data.genre_ids),
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
