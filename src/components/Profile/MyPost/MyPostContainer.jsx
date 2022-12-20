import { connect } from 'react-redux';
import { addNewPostActionCreate, updateNewPostTextActionCreate } from '../../../redux/profileReducer';
import MyPost from './MyPost';


let mapStateToProps = (state) => {
    return {
profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
addPost: () => {
    dispatch(addNewPostActionCreate())
},
onPostChange: (text) => {
    dispatch(updateNewPostTextActionCreate(text))
}
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;