// Used to store movies returned from the server

const scifi = 'Science Fiction'
const spaceOpera = 'Space-Opera'

const selectedGenres = (state =
    {
        Adventure: false,
        Animated: false,
        Biographical: false,
        Comedy: false,
        Disaster: false,
        Drama: false,
        Epic: false,
        Fantasy: false,
        Musical: false,
        Romantic: false,
        [scifi]: false,
        [spaceOpera]: false,
        Superhero: false,
    },
    action) => {
    switch (action.type) {
        case 'SELECT_GENRE':
            const genreToChange = action.payload[0];
            const toggleBoolean = action.payload[1];
            console.log('genre change is', {[genreToChange]: toggleBoolean});
            return {...state, [genreToChange]: toggleBoolean};
        default:
            return state;
    }
}

export default selectedGenres;