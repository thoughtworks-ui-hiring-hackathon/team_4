import React from 'react';
import {Link} from "react-router-dom";
import './Heder.scss';

export default class Header extends React.PureComponent {

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