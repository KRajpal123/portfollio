import { Grid, styled } from '@mui/material'
import React from 'react'
import FallbackAvatars from '../Avatar';

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

const Navbar = (props) => {
    const navItems = props.navItems;
    return (
        <Grid container gap={2}>
            <Grid item xs={2}>
                <FallbackAvatars />
            </Grid>
            <Grid item xs={9}>
                <StyledUl>
                    {navItems.map((nav) => (
                        <StyledLi key={nav.id}>{nav.name}</StyledLi>
                    ))}
                </StyledUl>
            </Grid>
        </Grid>
    )
}

export default Navbar