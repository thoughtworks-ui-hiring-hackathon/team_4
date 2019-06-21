import React from 'react';

export default class Movie extends React.PureComponent {

	render() {
		const {data} = this.props;
		return (
			<div className='movie'>
				<div className='poster'>
					<img src={data.poster_path}/>
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
						show more
					</div>
				</div>
			</div>
		);
	}
}
