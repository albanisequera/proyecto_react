import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Toolbar } from '@material-ui/core';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingBottom: theme.spacing(1),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '0.5rem',
        [theme.breakpoints.down('sm')]: {
            gap: 2,
            display: 'flex',
        },
        [theme.breakpoints.down('xs')]: {
            gap: 5,
            display: 'flex',
            flexWrap: 'wrap',
        },
    }
}));

export default function Navegationbar() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [anchorEl_2, setAnchorEl_2] = React.useState(null);
    const open_2 = Boolean(anchorEl_2);
    const handleClick_2 = (event) => {
        setAnchorEl_2(event.currentTarget);
    };
    const handleClose_2 = () => {
        setAnchorEl_2(null);
    };


    const menuId = 'primary-search-account-menu';
    const menuId_2 = 'second-search-account-menu';

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open_2={open}
            onClose_2={handleClose}
        >
        </Menu>
    );
    const renderMenu_2 = (
        <Menu
            anchorEl_2={anchorEl_2}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId_2}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={open_2}
            onClose={handleClose_2}
        >
        </Menu>
    );

    return (
        <>
            <div className={classes.root}>
                <div>
                    <Link to='/nosotros' style={{ textDecoration: 'none' }}>
                        <Button id="basic-button"
                            size="large"
                            variant="contained"
                            color='secondary'>
                            Nosotros
                        </Button>
                    </Link>
                </div>
                <Box >
                    <Button
                        id="basic-button"
                        size="large"
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        variant="contained"
                        color='secondary'
                    >
                        Cursos
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <Link to='/traduccion' style={{ textDecoration: 'none' }}>
                            <MenuItem onClick={handleClose}>Traducion</MenuItem>
                        </Link>
                        <Link to='/interpretacion' style={{ textDecoration: 'none' }}>
                            <MenuItem onClick={handleClose}>Interpretacion</MenuItem>
                        </Link>
                    </Menu>
                </Box>
                <Box >
                    <Button
                        id="basic-button"
                        size="large"
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        aria-expanded={open_2 ? 'true' : undefined}
                        onClick={handleClick_2}
                        variant="contained"
                        color='secondary'
                    >
                        Diplomados
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl_2}
                        open={open_2}
                        onClose={handleClose_2}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <Link to='/hipaa' style={{ textDecoration: 'none' }}>
                        <MenuItem onClick={handleClose_2}>Hipaa</MenuItem>
                        </Link>
                        <Link to='/fwa' style={{ textDecoration: 'none' }}>
                            <MenuItem onClick={handleClose_2}>Fwa</MenuItem>
                        </Link>
                        <Link to='/efenglish' style={{ textDecoration: 'none' }}>
                        <MenuItem onClick={handleClose_2}>Ef english</MenuItem>
                        </Link>
                        <Link to='/bridgingthegap' style={{ textDecoration: 'none' }}>
                        <MenuItem onClick={handleClose_2}>Bridging the gap</MenuItem>
                        </Link>
                        <Link to='/courtinterpreter' style={{ textDecoration: 'none' }}>
                        <MenuItem onClick={handleClose_2}>Court Interpreter</MenuItem>
                        </Link>
                    </Menu>
                </Box>
                <Link to='/blog' style={{ textDecoration: 'none' }}>
                <Button
                    id="basic-button"
                    size="large"
                    variant="contained"
                    color='secondary'
                >
                    Blog
                </Button>
                </Link>
                <Link to='/product' style={{ textDecoration: 'none' }}>
                <Button
                    id="basic-button"
                    size="large"
                    variant="contained"
                    color='secondary'
                >
                    Comprar
                </Button>
                </Link>
            </div>
            {renderMenu}
            {renderMenu_2}
        </>
    );
}
