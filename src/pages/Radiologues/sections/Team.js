/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import team1 from "assets/images/leila.JPG";
import team2 from "assets/images/bejaoui houda.JPG";
import team3 from "assets/images/karim.jpg";
import team4 from "assets/images/saidaini houda.JPG";
import team5 from "assets/images/sabiha.JPG";
import team6 from "assets/images/bejaoui houda.JPG";
import team7 from "assets/images/bejaoui houda.JPG";
import team8 from "assets/images/bo3jila.jpg";
import team9 from "assets/images/aymen.JPG";
import team10 from "assets/images/medali.jpg";
import team11 from "assets/images/anissa.JPG";
import team12 from "assets/images/cherif.JPG";
import team13 from "assets/images/malika.jpg";
import team14 from "assets/images/rim.jpg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Nos Formateurs
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name="MAALAOUI LEILA"
                position={{ color: "info", label: "Projet: Panda" }}
                
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team2}
                name="BEJAOUI HOUDA"
                position={{ color: "info", label: "Projet: Panda" }}
           
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team3}
                name="BEN ROMDHANE KARIM"
                position={{ color: "info", label: "Projet: Panda" }}
                
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4}
                name="SAIDANI HOUDA"
                position={{ color: "info", label: "Projet: body compass/dash" }}
               
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team5}
                name="GRAMI SABIHA"
                position={{ color: "info", label: "Projet: body compass/dash" }}
                
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team6}
                name="KHAZRI OULAYA"
                position={{ color: "info", label: "Projet: p1/p2" }}
                
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team7}
                name="SAIDANI IBTISSEM"
                position={{ color: "info", label: "Projet: p1/p2" }}
                
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team8}
                name="BOUAGILA HANA"
                position={{ color: "info", label: "Projet: iwco" }}
                
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team9}
                name="HADDED AYMEN"
                position={{ color: "info", label: "Projet: iwco" }}
                
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team10}
                name="BOUGHANJA MOHAMED ALI"
                position={{ color: "info", label: "Projet: bmw" }}
                
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team11}
                name="GHANMI ANISSA"
                position={{ color: "info", label: "Projet: bmw" }}
                
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team12}
                name="CHERIF MED ALI"
                position={{ color: "info", label: "Projet: bmw" }}
                
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team13}
                name="FERJAOUI MALIKA"
                position={{ color: "info", label: "Projet: smalls 01+bcuv floor + ipbsuv" }}
               
              />
            </MKBox>
          </Grid> <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team14}
                name="SAIDI RIM"
                position={{ color: "info", label: "Projet: smalls 01+ip/bxuv" }}
                
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
