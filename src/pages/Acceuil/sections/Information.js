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

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";
import { colors } from 'assets/theme/base/colors';

function Information() {
  return (
    <MKBox component="section" py={2} my={2}>
      <Container>
        <Grid container item xs={11} spacing={9} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={5} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    HORAIRES
                    <br />
                    D&apos;OUVERTURE
                  </>
                }
              />
              <RotatingCardBack
                image={bgBack}
                title={
                  <>
                    6:00 - 14:00
                    <br />
                    <br />
                    14:00 - 22:00
                    <br />
                    <br />
                   22:00 - 6:00
                  </>
                }
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid item xs={12} md={9}>
              <DefaultInfoCard
                icon="devices"
                iconcolor="error"
                title="A PROPOS DE NOUS"
                description="YAZAKI CORPORATION est un fabricant japonais de composants automobile, plus particulièrement des faisceaux de câbles, des composants électroniques et une foule d´autres produits pour l&apos;industrie automobile."
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
