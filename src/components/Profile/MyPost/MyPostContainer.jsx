import { connect } from 'react-redux';
import { addNewPostActionCreate } from '../../../redux/profileReducer';
import MyPost from './MyPost';


let mapStateToProps = (state) => {
    return {
profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
addPost: (messagePost) => {
    dispatch(addNewPostActionCreate(messagePost))
},
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;