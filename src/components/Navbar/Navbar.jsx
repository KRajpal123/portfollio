import { Container, Grid, styled } from '@mui/material'
import React from 'react'
import FallbackAvatars from '../Avatar';
import { Link, useLocation } from 'react-router-dom';

const StyledUl = styled('ul')({
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    cursor: 'pointer',
    textTransform: 'uppercase',
});

const StyledLi = styled('li')({
    fontSize: '1.2em',
    transition: 'color 0.3s ease-in-out',
    padding: "10px 0px",
    '&:hover': {
        color: 'lightblue',
    },
    '&:last-child': {
        padding: "10px 30px",
        background: 'linear-gradient(to right, #667eea, 0, #6b8dd6, #8e37d7)',
        color: "white",
        borderRadius: "20px",
        boxShadow: "1px 1px 1px rgba(0,1,1,0)"
    },
});

const ActiveLinkStyle = {
    fontWeight: 'bold',
    color: 'lightblue',
};


const Navbar = (props) => {
    const navItems = props.navItems;
    const location = useLocation();

    return (
        <Container maxWidth={'lg'} sx={{ position: "fixed" }}>
            <Grid container gap={2}>
                <Grid item xs={2}>
                    <FallbackAvatars />
                </Grid>
                <Grid item xs={9}>
                    <StyledUl>
                        {navItems.map((nav) => (
                            <StyledLi key={nav.id}>
                                <Link
                                    to={nav.page}
                                    style={{
                                        textDecoration: "none",
                                        color: location.pathname === nav.page ? ActiveLinkStyle.color : "white",
                                        fontWeight: location.pathname === nav.page ? ActiveLinkStyle.fontWeight : 'normal',
                                    }}
                                >
                                    {nav.name}
                                </Link>
                            </StyledLi>
                        ))}
                    </StyledUl>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Navbar