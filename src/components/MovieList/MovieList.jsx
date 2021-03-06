import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    //retrieve movies from db on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <>
            <h1>The Great Movie Library</h1>
            <Box
                sx={{ padding: 5, marginLeft: 5, marginRight: 5 }}
                style={{ background: '#536271' }}
            >
                <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                >
                    {movies.map(movie => (
                        <MovieItem
                            key={movie.id}
                            movie={movie}
                        />
                    ))}
                </Grid>
            </Box>
        </>

    );
}

export default MovieList;