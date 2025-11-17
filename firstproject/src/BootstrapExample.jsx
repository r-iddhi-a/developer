import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack,Button } from 'react-bootstrap';
export const BootstrapExample = () => {
    return (
        <div>
            <hr/>
            <h3>Bootstrap Example</h3>
            <button className='btn btn-success'>Add</button>
            <button className='btn btn-danger'>Cancel</button>
            <hr />
            <Stack direction="horizontal" gap={2}>
                <Button as="a" variant="primary">
                    Button as link
                </Button>
                <Button as="a" variant="success">
                    Button as link
                </Button>
            </Stack>;
        </div>
    )
}
