import { useHistory } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function MovieItem({ movie }) {

    const history = useHistory();
    // since arrays start at position 0,
    // the id in the DB is one off from the array placement
    // this fixes that
    const movieDetailRoute = movie.id - 1;

    // routes to details when picture is clicked
    const handleClick = () => {
        history.push(`/details/${movieDetailRoute}`);
    }

    return (
        <Grid item xs>
            <Card sx={{ minWidth: 275, minHeight: 400 }}>
                <CardContent>
                    <div key={movie.id} >
                        <h3>{movie.title}</h3>
                        <img
                            src={movie.poster}
                            alt={movie.title}
                            onClick={handleClick}
                        />
                    </div>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default MovieItem;