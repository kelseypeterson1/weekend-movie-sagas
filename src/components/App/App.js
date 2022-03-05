import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { MovieList, MovieDetails, MovieForm } from '../../index.js'

function App() {
  return (
      <Router>
    <div className="App">
      <h1>The Movies Saga!</h1>
        <Route path="/" exact>
          <MovieList />
        </Route>

        <Route path='/details/:id'>
          <MovieDetails />
        </Route>

        <Route path='/form'>
          <MovieForm />
        </Route>


      <Link to='/form'>Movie Form</Link>
    </div>
      </Router>
  );
}


export default App;
