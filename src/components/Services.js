import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#c2c2c2" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicTable() {
  return (
    <Box id="services" sx={{ flexGrow: 1 }}>
      <br />
      <Divider>
        <Typography
          sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
          variant="h2"
        >
          Additional Services
        </Typography>
        <Typography
          sx={{ display: { xs: "none", sm: "flex", md: "none", xl: "none" } }}
          variant="h4"
        >
          Additional Services
        </Typography>
        <Typography
          sx={{
            display: { xs: "flex", sm: "none", md: "none" },
            fontSize: { xs: "2rem" },
          }}
          variant="h6"
        >
          Additional Services
        </Typography>
      </Divider>
      <br />
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {/*//=========== GRID BOX START =================================> */}
        <Grid item xs={11} md={6} lg={4}>
          <Item
            elevation={4}
            sx={{ bgcolor: "primary.dark", color: "primary.contrastText" }}
          >
            <Paper sx={{ bgcolor: "primary.light" }}>
              <Divider variant="middle">
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  Headlight Restoration
                </Typography>
              </Divider>
            </Paper>
            <Grid>
              <Paper elevation={4}>
                <Typography
                  variant="h6"
                  bgcolor="secondary.dark"
                  color="primary.contrastText"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  $80
                </Typography>
              </Paper>
            </Grid>
          </Item>
        </Grid>

        {/*//=========== GRID BOX START =================================> */}
        <Grid item xs={11} md={6} lg={4}>
          <Item
            elevation={4}
            sx={{ bgcolor: "primary.dark", color: "primary.contrastText" }}
          >
            <Paper sx={{ bgcolor: "primary.light" }}>
              <Divider variant="middle">
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  Clean Engine Compartment
                </Typography>
              </Divider>
            </Paper>
            <Grid sx={{ bgcolor: "primary.light" }}>
              <Paper elevation={4}>
                <Typography
                  variant="h6"
                  bgcolor="secondary.dark"
                  color="primary.contrastText"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  $25
                </Typography>
              </Paper>
            </Grid>
          </Item>
        </Grid>

        {/*//=========== GRID BOX START =================================> */}
        <Grid item xs={11} md={6} lg={4}>
          <Item
            elevation={4}
            sx={{ bgcolor: "primary.dark", color: "primary.contrastText" }}
          >
            <Paper sx={{ bgcolor: "primary.light" }}>
              <Divider variant="middle">
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  Interior Stain Removal
                </Typography>
              </Divider>
            </Paper>
            <Grid sx={{ bgcolor: "primary.light" }}>
              <Paper elevation={4}>
                <Typography
                  variant="h6"
                  bgcolor="secondary.dark"
                  color="primary.contrastText"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  $35
                </Typography>
              </Paper>
            </Grid>
          </Item>
        </Grid>

        {/*//=========== GRID BOX START =================================> */}
        <Grid item xs={11} md={6} lg={4}>
          <Item
            elevation={4}
            sx={{ bgcolor: "primary.dark", color: "primary.contrastText" }}
          >
            <Paper sx={{ bgcolor: "primary.light" }}>
              <Divider variant="middle">
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  Clay Bar*
                </Typography>
              </Divider>
            </Paper>
            <Grid sx={{ bgcolor: "primary.light" }}>
              <Paper elevation={4}>
                <Typography
                  variant="h6"
                  bgcolor="secondary.dark"
                  color="primary.contrastText"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  $25
                </Typography>
              </Paper>
            </Grid>
          </Item>
        </Grid>

        {/*//=========== GRID BOX START =================================> */}
        <Grid item xs={11} md={6} lg={4}>
          <Item
            elevation={4}
            sx={{ bgcolor: "primary.dark", color: "primary.contrastText" }}
          >
            <Paper sx={{ bgcolor: "primary.light" }}>
              <Divider variant="middle">
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  Pet Hair Removal
                </Typography>
              </Divider>
            </Paper>
            <Grid sx={{ bgcolor: "primary.light" }}>
              <Paper elevation={4}>
                <Typography
                  variant="h6"
                  bgcolor="secondary.dark"
                  color="primary.contrastText"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  $49.99
                </Typography>
              </Paper>
            </Grid>
          </Item>
        </Grid>
      </Grid>
      <br />
      {/*//=========== GRID BOX START =================================> */}

      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={11} md={5} lg={4} xl={2.5}>
          <Item
            elevation={4}
            sx={{ bgcolor: "primary.dark", color: "primary.contrastText" }}
          >
            <Paper sx={{ bgcolor: "primary.light" }}>
              <Divider variant="middle">
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  Ceramic Coating
                </Typography>
              </Divider>
            </Paper>
            <Grid sx={{ bgcolor: "primary.light" }}>
              <Paper elevation={4}>
                <Typography
                  variant="h6"
                  bgcolor="secondary.dark"
                  color="primary.contrastText"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  Cars − $400
                </Typography>
                <Typography
                  variant="h6"
                  bgcolor="secondary.dark"
                  color="primary.contrastText"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  Trucks − $575
                </Typography>
                <Typography
                  id="hours"
                  variant="h6"
                  bgcolor="secondary.dark"
                  color="primary.contrastText"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  Large SUV/Trucks − $650
                </Typography>
              </Paper>
            </Grid>
          </Item>
        </Grid>
        {/*//=============== GRID END GOES TO BOTTOM  =====================> */}
      </Grid>
    </Box>
  );
}