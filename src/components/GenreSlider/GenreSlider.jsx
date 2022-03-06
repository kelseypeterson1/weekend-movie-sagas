import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';


export default function GenreSlider({ genre }) {

    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);

    // update selectedGenres reducer
    const handleChange = (event) => {
        // toggle genre
        setChecked(event.target.checked);

        dispatch({
            type: 'SELECT_GENRE',
            payload: [genre.name, !checked]
        })
    }

    return (
        <>
            <FormControlLabel
                control=
                    {<Checkbox
                        onChange={handleChange}
                        checked={checked}
                    />
                }
                label={genre.name}
            />
        </>
    )
}