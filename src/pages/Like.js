import React from 'react'
import {connect} from 'react-redux';
import { addLikes } from '../redux/actions/addLikes';

function Like(props) {
  return (
    <div>
      {props.likelist}
    </div>
  )
}

const MapStateToProps = (state) => {
  return {
    likelist: state.LikelistReducer.likelist,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    addLikes: (id)=>dispatch(addLikes(id)),
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(Like);
