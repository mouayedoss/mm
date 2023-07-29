/**
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
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Material Kit 2 React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";

// Material Kit 2 React page layout routes
import routes from "routes";

// Images
import bgImage from "assets/images/emp1.jpg";

import React, { useState, useEffect } from "react";
import {Link,useNavigate,useParams} from 'react-router-dom';
import axios from "axios";

function SignInBasic() {
  const Navigate = useNavigate();

  const [admin, setadmin] = useState("");
 
  const handleChange = (e) => {
    setadmin({ ...admin, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submitted");
    axios
      .post("http://localhost:4000/api/employee/login", admin)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("MATRICULLE", res.data.MATRICULLE);
        console.log(res.data);
        console.log(res.data.token);
        console.log(res.data.MATRICULLE);
        axios.get(`http://localhost:5000/employee/${res.data.MATRICULLE}`).then((resEmployee)=>{
          localStorage.setItem("Id_poste", resEmployee.data[0].Id_poste);
          console.log(resEmployee,'resEmployee');

          if (localStorage.getItem("token") &&localStorage.getItem("MATRICULLE")&&localStorage.getItem("MATRICULLE")!=undefined ) {
            Navigate(`/qcm/${res.data.MATRICULLE}`);
  
          }
          else{
            // alert verification du matricule 
          }
        })
      })
      .catch((err) => {
        console.log(err);
      });

  };
  return (
    <>
      <DefaultNavbar routes={routes} transparent light sticky />
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  connexion
                </MKTypography>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form" onSubmit={handleSubmit}>
                  <MKBox mb={2}>
                    <MKInput type="text" label="Matriculle" name="MATRICULLE" fullWidth required  onChange={handleChange}/>
                  </MKBox>
                  
                  <MKBox mt={4} mb={1}>
                    <MKButton variant="gradient" color="info" fullWidth   type="submit">
                      se connecter
                    </MKButton>
                  </MKBox>
                 
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
    </>
  );
}

export default SignInBasic;
