import { useHistory } from 'react-router-dom';

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
        <div key={movie.id} >
            <h3>{movie.title}</h3>
            <img
                src={movie.poster}
                alt={movie.title}
                onClick={handleClick}
            />
        </div>
    )
}

export default MovieItem;