import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { MovieList, MovieDetails } from '../index.js'
import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>

        <Route path='/details/:id'>
          <MovieDetails />
        </Route>

      </Router>
    </div>
  );
}


export default App;
