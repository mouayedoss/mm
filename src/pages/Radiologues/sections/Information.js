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
// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";

// Images
import bgImage from "assets/images/image22.jpg";

function Information() {
  return (
    <MKBox component="section" py={8}>
      <Container>
        <Grid container item xs={11} spacing={20} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={5} sx={{ mx: "auto" }}>
            <MKTypography variant="body3" color="text">
              Le Formateur est un  spécialiste qui occupe un rôle essentiel dans la chargé de former de futurs professionnels.
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid item xs={12} md={9}>
              <TransparentBlogCard
                image={bgImage}
                action={{
                  type: "internal",
                  route: "",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
