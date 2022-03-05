import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


export default function MovieDetails() {

    const { id } = useParams();
    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);
    const movie = movies[id];
    const dispatch = useDispatch();

    //retrieve genres from db on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES', payload: movie });
    }, []);

    return (
        <>
            <h2>{movie.title}</h2>

            <img src={movie.poster} />

            <h2>Genres</h2>
            {genres.map((genre, i) => (
                <p key={i}>{genre.name}</p>
            ))}

            <h4>{movie.description}</h4>
        </>
    )
}