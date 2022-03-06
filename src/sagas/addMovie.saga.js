import { put } from 'redux-saga/effects';
import axios from 'axios';

export default function* addMovie(action) {
    // add movie to DB
    try { 
        console.log('movie sent is:', action.payload)
        yield axios.post(`/api/movie`, action.payload);
        yield put({ type: 'FETCH_MOVIES' })

    } catch (err) {
        console.log('POST error is', err);
    }
    
}