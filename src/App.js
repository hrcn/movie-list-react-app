import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {connect} from 'react-redux';
// pages
import Home from './pages/Home'
import MovieList from './pages/MovieList'
import Like from './pages/Like'
import Block from './pages/Block'
//actions
import {addLikes} from './redux/actions/addLikes';
// components
import Nav from './components/Nav'

function App(props) {
  return (
    <Router>
      <Nav />
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movielist" exact component={MovieList} />
          <Route path="/like" exact component={Like} />
          <Route path="/block" exact component={Block} />
        </Switch>
      </div>
    </Router>
  );
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

export default connect(MapStateToProps, MapDispatchToProps)(App);
