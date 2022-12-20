import React from 'react';
import Friends from './Friends';

const FriendsContainer = (props) => {

    return (
        // <StoreContext.Consumer>
        //     {
        //         (store) => {

        //             let state = props.store.getState();
        //             return (
        //                 <Friends friends={state.sidebar.friends} />)
        //         }}
        // </StoreContext.Consumer>
        <Friends/>
    )

}

export default FriendsContainer;







