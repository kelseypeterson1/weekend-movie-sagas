// Used to store movies returned from the server
const selectedGenres = (state =
    {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
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