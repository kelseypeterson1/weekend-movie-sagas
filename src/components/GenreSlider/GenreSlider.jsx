import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';

export default function GenreSlider({ genre }) {

    const dispatch = useDispatch();

    // update selectedGenres reducer
    const handleChange = (event) => {
        dispatch({ 
            type: 'SELECT_GENRE',
            payload: [genre.name, true]
        })
    }

    console.log('genre is', genre)
    return (
        <>
            {/* <FormControlLabel control={<Checkbox onChange={handleChange} defaultChecked />} label={genre.name} /> */}
            <FormControlLabel control={<Checkbox onChange={handleChange} />} label={genre.name} />
        </>
    )
}