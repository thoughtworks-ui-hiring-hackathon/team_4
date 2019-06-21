import React from 'react';
import {getSearchResults} from './Search.action'
import {connect} from 'react-redux';
import MovieList from '../../common/MovieList/MovieList';
import {moviesSelector} from './Search.selector'

class Search extends React.PureComponent {
	constructor(props) {
		super(props);
		this.onChangeHandler = this.onChangeHandler.bind(this);
	}

	onChangeHandler(e) {
		// setTimeout(() => {
		// 	getSearchResults(e.target.value)
		// }, 3000);
		this.props.getSearchResults(e.target.value);
	}

	render() {
		return (
			<div className='search-page'>
				<input onChange={this.onChangeHandler} />
				<MovieList movies={this.props.movies}/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
    movies: moviesSelector(state)
});
const mapDispatchToProps = dispatch => ({
	getSearchResults: (...args) => dispatch(getSearchResults(...args))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);