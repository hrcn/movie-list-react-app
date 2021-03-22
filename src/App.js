import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// pages
import Home from './pages/Home'
import MovieList from './pages/MovieList'
import Like from './pages/Like'
import Block from './pages/Block'

// components
import Nav from './components/Nav'

function App() {
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

export default App;
