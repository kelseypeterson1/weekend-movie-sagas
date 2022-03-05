import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useState } from 'react';

export default function MovieForm() {

    const [name, setName] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        console.log('submit')
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <form onSubmit={handleSubmit}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SL1000_.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <TextField
                            id="title"
                            label="Title"
                            variant="standard"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <TextField
                            id="poster"
                            label="Poster"
                            variant="standard"
                            value={poster}
                            onChange={(event) => setPoster(event.target.value)}
                        />
                        <TextField
                            id="description"
                            label="Description"
                            multiline
                            maxRows={4}
                            variant="standard"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </CardContent>
                </Card>
            </form>
        </Box>
    )
}