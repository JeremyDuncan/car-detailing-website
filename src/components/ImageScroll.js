// *****************************************************************************
// This component displays the Follow Us section and links
// Goes to ==> App.js Component
// *****************************************************************************

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import * as React from "react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import DetailingImages from "./DetailingImages";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#c2c2c2" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AboutUs() {
  return (
    <Box
      id="appointment"
      sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
    >
      <br />
      <br />
      {/*//=========== GRID BOX START =================================> */}
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {/*//=========== GRID BOX START =================================> */}
        <Grid
          sx={{ display: "flex", flexDirection: "column" }}
          item
          xs={11}
          sm={10}
          md={10}
          lg={6}
          xl={5}
        >
          <Item sx={{ bgcolor: "primary.main", color: "white" }}>
            <DetailingImages />
          </Item>
        </Grid>
        {/*//=========== GRID END =======================================> */}
        {/*//=============== GRID END GOES TO BOTTOM  =====================> */}
      </Grid>
      {/*//=============== GRID END GOES TO BOTTOM  =====================> */}
      <br />
    </Box>
  );
}
