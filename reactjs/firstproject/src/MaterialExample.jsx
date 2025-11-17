import React from 'react'
import { Stack, Button } from '@mui/material'
import Button1 from "react-bootstrap/Button";
export const MaterialExample = () => {
    return (
        <>
            <div>
                <h3>Material Ui Example</h3>
            </div>
            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
            <Button1 as="a" variant="success">
                Button as link
            </Button1>
        </>
    )
}
