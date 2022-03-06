import { put } from 'redux-saga/effects';
import axios from 'axios';

export default function* fetchAllGenres(action) {
    // get a list of all genres
    try { 
        console.log('in fetchAllGenres')
        const genres = yield axios.get(`/api/genre`);
        yield console.log('genres received', genres.data)
        yield put({ type: 'SET_ALL_GENRES', payload: genres.data });

    } catch (err) {
        console.log('POST error is', err);
    }
    
}