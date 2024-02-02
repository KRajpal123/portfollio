import { Grid } from '@mui/material'
import React from 'react'


const styles = {
    ul: {
        listStyle: "none",
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "monospace",
        fontWeight: "bold",
        cursor: "pointer",
        textTransform: "upperCase",
    },
    li: {
        fontSize: "1.2em", 
        transition: "color 0.3s ease-in-out",
        "&:hover": {
            color: "red",
        },
    }
}

const Navbar = (props) => {
        const navItems = props.navItems;
        return (
            <Grid container gap={2} >
                <Grid item xs={2}>Logo</Grid>
                <Grid item xs={9}>
                    <ul style={styles.ul}>
                        {navItems.map((nav) => (
                            <li key={nav.id} style={styles.li}>{nav.name}</li>
                        ))}
                    </ul>

                </Grid>
            </Grid>
        )
    }

export default Navbar