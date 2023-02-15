import React from 'react';
import {useLocation,useNavigate,useParams, Navigate} from "react-router-dom";
import { connect } from 'react-redux';
import { getUsersProfile } from '../../redux/profileReducer';
import Profile from './Profile';
import { WithAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';



function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component {...props} router={{ location, navigate, params }}/>
        );
    }

    return ComponentWithRouterProp;
}


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = 2;
        }
        
    
        this.props.getUsersProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({ 
    profile: state.profilePage.profile,
})

export default compose(
    WithAuthRedirect,
    withRouter,
    connect(mapStateToProps, {getUsersProfile})  
)(ProfileContainer);

