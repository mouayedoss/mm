// @mui icons
import GoogleIcon from "@mui/icons-material/Google";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Medix",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <GoogleIcon />,
      link: "http://www.zimys.com/",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "Acceuil", href: "/Acceuil" },
        { name: "Radiologues", href: "/Radiologues" },
        { name: "Spécialités", href: "/Specialite" },
        { name: "Se connecter", href: "/authentication/sign-in" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} by{" "}
      <MKTypography
        component="a"
        href="http://www.zimys.com/"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Zimys
      </MKTypography>
      .
    </MKTypography>
  ),
};
