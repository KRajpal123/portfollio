import { Button } from '@mui/material'
import React from 'react'

const PrimaryButton = ({ children }) => {
    return (
        <>
            <Button>
                {children}
            </Button>
        </>
    )
}

export default PrimaryButton