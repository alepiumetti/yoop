import React from "react";

import { Container, Grid, Typography } from "@material-ui/core";

import Logo from "../../img/logo yoop.svg";

function Marcas() {
  return (
    <Container style={{paddingTop:"10px"}}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img src={Logo} className="App-logo" alt="Logo Yoop" />
        </Grid>
        <Grid item xs={3}>
            <Typography variant="h5">
                Marcas amigas
            </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Marcas;
