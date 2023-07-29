
// @mui material components

import  TransparentBlogCard from "@mui/material/Grid";

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
import {
  Modal,
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,

  Container,
  Row,
  Col,
} from "react-bootstrap";

// Images
import bgImage from "assets/images/emp2.jpg";

import React, { useState, useEffect } from "react";
import {Link,useNavigate,useParams} from 'react-router-dom';
import axios from "axios";

import { Resultat } from 'pages/resultat';
import { blue } from "@mui/material/colors";


function SignInBasic() {
   
  useEffect(() => {
    loadresultat();
  }, []);
  
  const loadresultat =  () => {
   
    axios
       .get(`http://localhost:5000/resultfinal/`)
       .then((final) => {
         console.log("**** : ",final.data);
         setCR(final.data);
       });
   };
  
 
   const [CR, setCR] = useState([]);

  return (
    <>
      <DefaultNavbar routes={routes}  sticky />
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
              rgba(gradients.dark.main, 1),
              rgba(gradients.dark.state, 0.7)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
  
      
  <Card.Body className="table-full-width table-responsive px-0">
                  
                  <Table className="table-hover table-striped"   style={{ color :"white",width: "1300px", border: " 2px", margin: "100px 10px "  }}>

  <thead >
    <tr>
      <th className="border-0"><b><u><i><h3>MATRICULLE</h3></i></u></b></th>
      <th className="border-0"><b><u><i><h3>NOM</h3></i></u></b></th>
      <th className="border-0"><b><u><i><h3>PRENOM</h3></i></u></b></th>
      <th className="border-0"><b><u><i><h3>POSTE</h3></i></u></b></th>
      <th className="border-0"><b><u><i><h3>RESULTAT</h3></i></u></b></th>
    </tr>
  </thead>
  <br/>
  <tbody>
  
                  {CR.map((name, index) => (
                    <tr key={index}>
                      <th style={{color:"red"}}><b><i>{name.MATRICULLE}</i></b></th>
                      <th style={{color:"white"}}><i>{name.NOM}</i></th>
                      <th style={{color:"white"}}><i>{name.PRENOM}</i></th>
                      <th style={{color:"white"}}><i>{name.Nom_poste}</i></th>
                      <th style={{color:"green"}}><i>{name.RESULTAT}</i></th>
                      
                      </tr>
                      ))}
                      
              
                    
 </tbody>

</Table>
</Card.Body>
</MKBox>

        
                   
     







        
           
     
   
        
    </>
  );
}

export default SignInBasic;
