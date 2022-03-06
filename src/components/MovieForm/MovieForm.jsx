import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import { GenreSlider } from '../../index.js'
import { makeStyles } from '@mui/styles';

export default function MovieForm() {

    const genres = useSelector(store => store.allGenres);
    const selectedGenres = useSelector(store => store.selectedGenres);
    const dispatch = useDispatch();
    const history = useHistory();

    // useStates
    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');
    // const [checkedGenres, setCheckedGenres] = useState([]);

    const useStyles = makeStyles({
        formGroup: {
            alignItems: 'center'
        },
    });

    const classes = useStyles();


    //retrieve movies from db on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_ALL_GENRES' });
    }, []);

    // returning an array of genre_ids with checked boxes
    function getTrueGenres(selectedGenres, boolean) {
        return Object.keys(selectedGenres).filter(key => selectedGenres[key] === boolean);
    }
    const checkedGenres = getTrueGenres(selectedGenres, true);

    // submit button posts to DB
    const handleSubmit = (event) => {
        event.preventDefault();

        for (let row of checkedGenres) {
            dispatch({
                type: "ADD_MOVIE",
                payload:
                {
                    title: title,
                    poster: poster,
                    description: description,
                    genre_id: row
                }
            })
        }

        // routes to the movie list page
        history.push('/');
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <form onSubmit={handleSubmit}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        image="https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SL1000_.jpg"
                        alt="movie poster"
                    />
                    <CardContent>
                        <TextField
                            id="title"
                            label="Title"
                            variant="standard"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                        <TextField
                            id="poster"
                            label="Poster"
                            variant="standard"
                            value={poster}
                            onChange={(event) => setPoster(event.target.value)}
                        />
                        <TextField
                            id="description"
                            label="Description"
                            multiline
                            maxRows={4}
                            variant="standard"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />

                        {/* Genre selection */}
                        <FormGroup className={classes.formGroup}>
                            {genres.map(genre => (
                                <GenreSlider
                                    key={genre.id}
                                    genre={genre}
                                />
                            ))}
                            <FormHelperText>*Must select a genre</FormHelperText>
                        </FormGroup>
                        {/* End Genre Selection */}

                    </CardContent>
                    <CardActions>
                        <Button size="small" type="submit">Submit</Button>
                    </CardActions>
                </Card>
            </form>
        </Box>
    )
}