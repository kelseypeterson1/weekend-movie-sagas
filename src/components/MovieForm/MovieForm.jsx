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
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';
import { GenreSlider } from '../../index.js'

export default function MovieForm() {
    
    const genres = useSelector(store => store.genres);
    const dispatch = useDispatch();
    const history = useHistory();

    // useStates
    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');
    // genre slider states
    const [state, setState] = React.useState({
        adventure: false,
        animated: false,
        biographical: false,
        comedy: false,
        disaster: false,
        drama: false,
        epic: false,
        fantasy: false,
        musical: false,
        romantic: false,
        scienceFiction: false,
        spaceOpera: false,
        superhero: false,
    });


    //retrieve movies from db on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_ALL_GENRES' });
    }, []);

    // submit button posts to DB
    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: "ADD_MOVIE",
            payload:
            {
                title: title,
                poster: poster,
                description: description,
                genre_id: 1
            }
        })

        // routes to the movie list page
        history.push('/');
    }

    console.log('state of slider is', state)


    // switches change use states
    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };


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
                        <FormControl component="fieldset" variant="standard">
                            <FormGroup>
                                <GenreSlider />
                                {/* <FormControlLabel
                                    control={
                                        <Switch checked={state.action} onChange={handleChange} name="action" />
                                    }
                                    label="Action"
                                />
                                <FormControlLabel
                                    control={
                                        <Switch checked={state.animated} onChange={handleChange} name="animated" />
                                    }
                                    label="Animated"
                                />
                                <FormControlLabel
                                    control={
                                        <Switch checked={state.biographical} onChange={handleChange} name="biographical" />
                                    }
                                    label="Biographical"
                                />
                                <FormControlLabel
                                    control={
                                        <Switch checked={state.comedy} onChange={handleChange} name="comedy" />
                                    }
                                    label="Comedy"
                                />
                                <FormControlLabel
                                    control={
                                        <Switch checked={state.disaster} onChange={handleChange} name="disaster" />
                                    }
                                    label="Disaster"
                                />
                                <FormControlLabel
                                    control={
                                        <Switch checked={state.drama} onChange={handleChange} name="drama" />
                                    }
                                    label="Drama"
                                />
                                <FormControlLabel
                                    control={
                                        <Switch checked={state.epic} onChange={handleChange} name="epic" />
                                    }
                                    label="Epic"
                                />
                                <FormControlLabel
                                    control={
                                        <Switch checked={state.fantasy} onChange={handleChange} name="fantasy" />
                                    }
                                    label="Fantasy"
                                />
                                <FormControlLabel
                                    control={
                                        <Switch checked={state.musical} onChange={handleChange} name="musical" />
                                    }
                                    label="Musical"
                                />
                                <FormControlLabel
                                    control={
                                        <Switch checked={state.romantic} onChange={handleChange} name="romantic" />
                                    }
                                    label="Romantic"
                                />
                                <FormControlLabel
                                    control={
                                        <Switch checked={state.scienceFiction} onChange={handleChange} name="scienceFiction" />
                                    }
                                    label="Science Fiction"
                                />
                                <FormControlLabel
                                    control={
                                        <Switch checked={state.spaceOpera} onChange={handleChange} name="spaceOpera" />
                                    }
                                    label="Space Opera"
                                />
                                <FormControlLabel
                                    control={
                                        <Switch checked={state.superhero} onChange={handleChange} name="superhero" />
                                    }
                                    label="Superhero"
                                /> */}
                            </FormGroup>
                            <FormHelperText>*Must select one</FormHelperText>
                        </FormControl>
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