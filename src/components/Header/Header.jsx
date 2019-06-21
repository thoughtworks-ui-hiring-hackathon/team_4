import React from 'react';
import {Link} from "react-router-dom";
import {getGenre} from '../../genre/genre.actions';
import {connect} from 'react-redux';
import './Heder.scss';

class Header extends React.PureComponent {

	componentDidMount() {
		this.props.dispatch(getGenre());
	}

	render() {
		return (
			<div className='app-header'>
				<div className='app-name'>
					Movie App
				</div>
				<Link to='/'>Home</Link>
				<Link to='/search'>Explore</Link>
			</div>
		);
	}
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
	dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
