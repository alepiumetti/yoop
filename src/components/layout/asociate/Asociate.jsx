import React from 'react'
import { Grid, TextField } from '@material-ui/core'

function Asociate() {
    return (
        <div>
            <Grid container spacing={2} justify="center" align="center">
                <Grid item xs={4}>
                    por 1 mes
                </Grid>
                <Grid item xs={4}>
                    por 6 meses
                </Grid>
                <Grid item xs={4}>
                    por 12 meses
                </Grid>
            </Grid>

        </div>
    )
}

export default Asociate
