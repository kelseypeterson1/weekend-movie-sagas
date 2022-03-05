import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem'
// import Grid from '@mui/material/Grid';


function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    //retrieve movies from db on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>

            {/* <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
            > */}
                {movies.map(movie => (
                    // <Grid item xs>
                        <MovieItem
                            key={movie.id}
                            movie={movie}
                        />
                    // </Grid>
                ))}
            {/* </Grid> */}
        </main>

    );
}

export default MovieList;