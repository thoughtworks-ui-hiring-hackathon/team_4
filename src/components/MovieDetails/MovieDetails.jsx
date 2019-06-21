import React from 'react';

export default class MovieDetails extends React.PureComponent {

	render() {
		const {match} = this.props;
		return (
			<div> details page{match.params.id}</div>
		);
	}
}