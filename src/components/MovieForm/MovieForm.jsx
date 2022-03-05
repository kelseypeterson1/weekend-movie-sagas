import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function MovieForm() {

    const dispatch = useDispatch();
    const history = useHistory();

    // useStates
    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: "ADD_MOVIE",
            payload: 
                {
                    title: title,
                    poster: poster,
                    description: description
                }
        })

        // routes to the movie list page
        history.push('/');

        console.log('submitted!')
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
                    </CardContent>
                    <CardActions>
                        <Button size="small" type="submit">Submit</Button>
                    </CardActions>
                </Card>
            </form>
        </Box>
    )
}