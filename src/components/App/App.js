import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { MovieList, MovieDetails, MovieForm } from '../../index.js'

function App() {
  return (
      <Router>
    <div className="App">
      <Link to='/form'>Movie Form</Link>
      

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
