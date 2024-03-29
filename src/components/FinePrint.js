// *****************************************************************************
// This component displays the Fine Print section
// Imported to App.js Component ==>
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React, { Component } from "react";
import FooterNav from "./FooterNav";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

class Footer extends Component {
  render() {
    return (
      <Box
        sx={{ flexGrow: 1 }}
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Item
            sx={{
              bgcolor: "primary.light",
              color: "black",
              borderRadius: "0px",
            }}
          >
            <FooterNav />
            <Divider variant="middle"></Divider>
            <Typography sx={{ fontSize: ".7rem" }}>
              *Prices based on condition of vehicle (prices may vary).
              **Appointments or drop-off recommended for Deluxe Detailing (2-3
              hours).
            </Typography>
            <Divider variant="middle"></Divider>
          </Item>
        </Grid>
      </Box>
    );
  }
}
export default Footer;
