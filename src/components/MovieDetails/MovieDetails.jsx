import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


export default function MovieDetails() {

    const {id} = useParams(); 
    const movies = useSelector(store => store.movies);
    const movie = movies[id]

    console.log('movie is:', movie)
    console.log('movies are:', movies)


    return (
        <>
            <h2>{movie.title}</h2>
            Details for {id} movie
        </>
    )
}