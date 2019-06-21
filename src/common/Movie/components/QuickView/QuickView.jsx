import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});


export default class QuickView extends React.PureComponent {

	render() {
		const {show, onClose, data} = this.props;
		return (
			<Dialog
				open={show}
				TransitionComponent={Transition}
				keepMounted
				onClose={onClose}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle id="alert-dialog-slide-title">{data.original_title}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						{data.overview}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={onClose} color="primary">
						Close
					</Button>
				</DialogActions>
			</Dialog>
		);
	}
}