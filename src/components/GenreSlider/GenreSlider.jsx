import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function GenreSlider({genre}) {
    return (
        <>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        </>
    )
}