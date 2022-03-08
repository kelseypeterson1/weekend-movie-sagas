import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


export default function MovieDetails() {

    const history = useHistory();
    const { id } = useParams();
    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);
    const movie = movies[id];
    const dispatch = useDispatch();

    //retrieve genres from db on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES', payload: movie });
    }, []);

    const handleClick = () => {
        history.push(`/`);
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <Card sx={{ maxWidth: 500 }}>
                <h2>{movie.title}</h2>
                <CardContent>
                    <img src={movie.poster} />

                    <h2>Genres</h2>
                    {genres.map((genre, i) => (
                        <p key={i}>{genre.name}</p>
                    ))}

                    <h4>{movie.description}</h4>

                    <Button
                        variant="text"
                        onClick={handleClick}
                    >
                        Back
                    </Button>
                </CardContent>
            </Card>
        </Box>
    )
}