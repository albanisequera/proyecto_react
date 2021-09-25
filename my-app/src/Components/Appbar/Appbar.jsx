import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../assets/logo.png'
import { Badge, Box, Button } from '@material-ui/core';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';
import { actionTypes } from "../../reducer";
import { ShoppingCart } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: '6rem',
        display: 'flex',
    },
    usuario: {
        paddingTop: theme.spacing(1),
        paddingRight: theme.spacing(1),
    },
    appbar: {
        backgroundColor: 'whitesmoke',
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.error.light, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.error.light, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'red',
    },
    inputRoot: {
        color: 'red',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    button: {
        marginLeft: theme.spacing(2),
    },
    image: {
        marginRight: '5px',
        height: '4rem',
        width: '9rem',
    },
}));

export default function Appbar() {
    const classes = useStyles();

    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const handleAuth = () => {
        if (user) {
            auth.signOut();
            dispatch({
                type: actionTypes.EMPTY_BASKET,
                basket: [],
            });
            history.push("/");
        }
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
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
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>
                <Typography variant='h6' color='textPrimary' component='p'>
                    Hello {user ? user.email : "Guest"}
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Link to={!user && "/signin"}>
                    <Button onClick={handleAuth} variant='outlined'>
                        <strong>{user ? "Sign Out" : "Sign In"}</strong>
                    </Button>
                </Link>
            </MenuItem>
            
            <MenuItem onClick={handleMenuClose}>
            <Link to='/checkout-page'>
              <IconButton aria-label='show cart items' color='inherit'>
                <Badge badgeContent={basket?.length} color='secondary'>
                  <ShoppingCart fontSize='large' color='primary' />
                </Badge>
              </IconButton>
            </Link>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.root}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" className={classes.appbar}>
                    <Toolbar>
                        <Link to='/'>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <img src={logo} alt="logo" className={classes.image} />
                            </IconButton>
                        </Link>
                        <div className={classes.search}>
                        </div>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <div className={classes.usuario}>
                                <Typography variant='h6' color='textPrimary' component='p'>
                                    Hello {user ? user.email : "Guest"}
                                </Typography>
                            </div>
                            <div className={classes.usuario}>
                            <Link to={!user && "/signin"}>
                                <Button onClick={handleAuth} variant='outlined'>
                                    <strong>{user ? "Sign Out" : "Sign In"}</strong>
                                </Button>
                            </Link>
                            </div>
                            <Link to='/checkout-page'>
                                <IconButton aria-label='show cart items' color='inherit'>
                                    <Badge badgeContent={basket?.length} color='secondary'>
                                        <ShoppingCart fontSize='large' color='primary' />
                                    </Badge>
                                </IconButton>
                            </Link>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon color="primary" />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </Box>
        </div>
    );
}
