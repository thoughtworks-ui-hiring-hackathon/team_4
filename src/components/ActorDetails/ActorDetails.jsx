import React from 'react';
import './ActorDetails.scss';
import {getActorDetails} from './ActorDetails.action';
import {actorDetailsSelector} from './ActorDetails.selector';
import {connect} from 'react-redux';

class ActorDetails extends React.PureComponent {
	constructor(props) {
		super(props);
    }
    
    componentDidMount () {
        const {match} = this.props;
        this.loadPageData(match.params.id);
    }

    loadPageData (id) {
        this.props.getActorDetails({actorId: id});
    }

	render() {
        const {actorDetails} = this.props;
        return <div className="actor-details">
            <img src={`https://image.tmdb.org/t/p/w500${actorDetails.profile_path}`} />
            <div className="details">
                <div>
                    <h1>{actorDetails.name}</h1>
                    <div className="date-of-birth">
                        <span>Date of birth</span>
                        <span>{actorDetails.birthday}</span>
                    </div>
                </div>
                <div className="biography">{actorDetails.biography}</div>
            </div>
        </div>;
	}
}

const mapStateToProps = state => ({
    actorDetails: actorDetailsSelector(state)
});
const mapDispatchToProps = dispatch => ({
	getActorDetails: (...args) => dispatch(getActorDetails(...args))
})

export default connect(mapStateToProps, mapDispatchToProps)(ActorDetails);