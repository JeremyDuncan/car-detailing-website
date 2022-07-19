import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Image from "mui-image";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

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
      id="home"
      sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
    >
      <br />
      <Divider>
        <Paper
          sx={{
            borderRadius: "15px",
            bgcolor: "primary.dark",
            margin: "auto",
            display: "flex",
          }}
          elevation={3}
        >
          <Typography
            sx={{
              fontWeight: "400",
              display: { xs: "none", sm: "none", md: "flex" },
            }}
            variant="h2"
            color="primary.contrastText"
          >
            Great Detailing
          </Typography>

          <Typography
            sx={{
              fontWeight: "400",
              display: { xs: "none", sm: "flex", md: "none", xl: "none" },
            }}
            variant="h4"
            color="primary.contrastText"
          >
            Great Detailing
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              display: { xs: "flex", sm: "none", md: "none" },
              fontSize: { xs: "2rem" },
            }}
            variant="h6"
            color="primary.contrastText"
          >
            Great Detailing
          </Typography>
        </Paper>
      </Divider>
      <br />
      <Typography
        sx={{ display: "flex", justifyContent: "center" }}
        variant="h5"
        color="primary.contrastText"
      >
        Amazing Quality Service
      </Typography>

      <Typography
        color="primary.contrastText"
        sx={{
          fontSize: { xs: "1.rem", md: "1.3rem" },
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          pl: 2,
          pr: 2,
          pt: 1,
        }}
      >
        At Willis Deluxe Detailing we take pride in the quality of our work.
      </Typography>
      <Typography
        color="primary.contrastText"
        sx={{
          fontSize: { xs: "1.rem", md: "1.3rem" },
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          pl: 2,
          pr: 2,
          pt: 1,
          pb: 1,
        }}
      >
        We guarantee you will be satisfied with our service.
      </Typography>

      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {/*//=========== GRID BOX START =================================> */}
        <Grid item xs={11} md={8} xl={4}>
          <Item sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image src={require("../images/Willis_Deluxe_Detail_j.webp")} />
          </Item>
        </Grid>
        {/*//=========== GRID END =======================================> */}
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
        <Grid item xs={11} sm={10} md={10} lg={10} xl={7}>
          <Item
            elevation={4}
            sx={{ bgcolor: "primary.dark", color: "primary.contrastText" }}
          >
            <Paper sx={{ bgcolor: "primary.light" }}>
              <Divider variant="middle">
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.5rem" },
                    fontWeight: 700,
                  }}
                >
                  Our Promise To You
                </Typography>
              </Divider>
            </Paper>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                bgcolor: "primary.light",
              }}
            ></Grid>
            <Paper sx={{ bgcolor: "secondary.dark" }}>
              <Typography p={1}>
                When you walk into our shop to have your vehicle detailed, we
                are dedicated to providing you with friendly service, a
                welcoming atmosphere, and above all else, excellent results. If
                you are not satisfied, please let us know and we will do
                whatever we can to make things right!
              </Typography>
              <Button
                color="info"
                href="#appointment"
                startIcon={<ArrowDownwardIcon />}
                variant="contained"
              >
                Schedule An Appointment!
              </Button>
            </Paper>
          </Item>
        </Grid>

        {/*//=============== GRID END GOES TO BOTTOM  =====================> */}
      </Grid>
      <br />
    </Box>
  );
}