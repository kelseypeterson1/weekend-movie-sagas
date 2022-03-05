import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function MovieForm() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <TextField
                        id="title"
                        label="Title"
                        variant="standard"
                    />
                    <br />
                    <TextField
                        id="poster"
                        label="Poster"
                        variant="standard"
                    />
                    <TextField
                        id="description"
                        label="Description"
                        multiline
                        maxRows={4}
                        variant="standard"
                    />
                </CardContent>
            </Card>
        </Box>
    )
}