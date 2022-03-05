import { put } from 'redux-saga/effects';
import axios from 'axios';

export default function* addMovie(action) {
    // add movie to DB
    try { 
        console.log('movie sent is:', action.payload)
        const genres = yield axios.post(`/api/movie`, action.payload);
        // yield put({ type: 'SET_GENRES', payload: genres.data });

    } catch (err) {
        console.log('POST error is', err);
    }
    
}