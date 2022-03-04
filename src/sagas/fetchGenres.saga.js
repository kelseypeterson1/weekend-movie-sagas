import { put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchGenres() {
    // get all genres from the DB
    try {
        const genres = yield axios.get('/api/genre');
        console.log('get all:', genres.data);
        yield put({ type: 'SET_GENRES', payload: genres.data });

    } catch {
        console.log('get all error');
    }
        
}

export default fetchGenres;