import { useParams } from 'react-router-dom';


export default function MovieDetails() {

    const {id} = useParams(); 

    return (
        <>
            Details for {id} movie
        </>
    )
}