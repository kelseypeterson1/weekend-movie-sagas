import { put } from 'redux-saga/effects';
import axios from 'axios';


function* fetchGenres(action) {
    // get genres for specific movie
    try { 
        console.log('movie id sent is:', action.payload)
        const genres = yield axios.post('/api/genre', action.payload);
        yield put({ type: 'SET_GENRES', payload: genres.data });
    } catch (err) {
        console.log('POST error is', err);
    }
}


export default fetchGenres;