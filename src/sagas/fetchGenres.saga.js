import { put } from 'redux-saga/effects';
import axios from 'axios';

export default function* fetchGenres(action) {
    // get genres for specific movie
    try { 
        console.log('movie id sent is:', action.payload)
        const genres = yield axios.get(`/api/genre/${action.payload.id}`);
        yield put({ type: 'SET_GENRES', payload: genres.data });

    } catch (err) {
        console.log('POST error is', err);
    }
    
}