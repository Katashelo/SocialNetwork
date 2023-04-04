import React from "react";
import { connect } from "react-redux";
import { follow, getUsersThunkCreator, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow, toggleFollowingProgress } from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import { WithAuthRedirect } from "../hoc/withAuthRedirect";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../redux/users-selectors";


class UsersContainer extends React.Component {
 
  componentDidMount() {

this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
   
  }

  onPageChange = (pageNumber) => {
    this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
   
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChange={this.onPageChange}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          users={this.props.users}
          followingInProgress={this.props.followingInProgress}
          toggleFollowingProgress={this.props.toggleFollowingProgress}

        />
      </>
    );
  }
};

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  };
};
// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userID) => {
//       dispatch(followAC(userID));
//     },
//     unfollow: (userID) => {
//       dispatch(unfollowAC(userID));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching));
//     },
//   };
// };
export default compose(
  connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsersThunkCreator }),
  WithAuthRedirect
)(UsersContainer);
