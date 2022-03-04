import { useHistory } from 'react-router-dom';

function MovieItem({ movie }) {

    const history = useHistory();
    const handleClick = () => {

        // console.log('event is', event)
        history.push(`/details/:${movie.id}`);
    }

    return (
        <>
            <div key={movie.id} >
                <h3>{movie.title}</h3>
                <img
                    src={movie.poster}
                    alt={movie.title}
                    onClick={handleClick}
                />
            </div>
        </>
    )
}

export default MovieItem;