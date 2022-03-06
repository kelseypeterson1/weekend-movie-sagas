import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
// Import reducers
import movies from './reducers/movies.reducer'
import genres from './reducers/genres.reducer'
// Import sagas
import fetchMovies from './sagas/fetchMovies.saga'
import fetchGenres from './sagas/fetchGenres.saga'
import addMovie from './sagas/addMovie.saga'
// Import MUI
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
// Import components directory
export {default as App} from './components/App/App'
export {default as MovieDetails} from './components/MovieDetails/MovieDetails'
export {default as MovieItem} from './components/MovieItem/MovieItem'
export {default as MovieList} from './components/MovieList/MovieList'
export {default as MovieForm} from './components/MovieForm/MovieForm'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#ff8f00"
        },
        secondary: {
            main: "#ffcc80"
        }
    }
});

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies);
    yield takeEvery('FETCH_GENRES', fetchGenres);
    yield takeEvery('ADD_MOVIE', addMovie);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Provider store={storeInstance}>
                <App />
            </Provider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
