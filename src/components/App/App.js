import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import './App.css';
import { MovieList, MovieDetails, MovieForm, NavBar } from '../../index.js'
import * as React from 'react';

function App() {

  return (
    <Router>
      <NavBar />

      <div className="App">

        <Route path="/" exact>
          <MovieList />
        </Route>

        <Route path='/details/:id'>
          <MovieDetails />
        </Route>

        <Route path='/form'>
          <MovieForm />
        </Route>


      </div>
    </Router>
  );
}


export default App;
