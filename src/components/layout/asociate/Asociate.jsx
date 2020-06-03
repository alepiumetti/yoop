import React from 'react'
import { Grid } from '@material-ui/core'

function Asociate() {
    return (
        <div>
            <Grid container spacing={2} justify="center">
                <Grid item xs={3}>
                    por 1 mes
                </Grid>
                <Grid item xs={3}>
                    por 3 meses
                </Grid>
                <Grid item xs={3}>
                    por 6 meses
                </Grid>
                <Grid item xs={3}>
                    por un año
                </Grid>
            </Grid>

        </div>
    )
}

export default Asociate
