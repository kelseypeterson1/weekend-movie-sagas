import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function NavBar() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Router>

            {/* MUI nav bar */}
            < Box sx={{ flexGrow: 1 }
            }>
                <AppBar
                    style={{ background: 'black' }}
                    // style={{ background: '#536271' }}
                    position="static"
                >
                    <Toolbar>
                        <IconButton
                            style={{ background: '#db5375' }}
                            onClick={handleClick}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>
                                <Typography variant="h8">
                                    <Link
                                        to='/'
                                        style={{ textDecoration: 'none' }}
                                    >
                                        Home
                                    </Link>
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Typography variant="h8">
                                    <Link
                                        to='/form'
                                        style={{ textDecoration: 'none' }}
                                    >
                                        Add Movie
                                    </Link>
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            </Box >
            {/* END MUI nav bar */}
        </Router>
    )
}