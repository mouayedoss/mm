import { useEffect } from "react";
// react-router components
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useParams,
} from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// Material Kit 2 React themes
import theme from "assets/theme";
import Acceuil from "layouts/pages/Acceuil";
import Test from "pages/test";
import SignIn from "pages/SignIn";
import Qcm from "pages/qcm";
import Alert from "pages/alert";
// Material Kit 2 React routes
import routes from "routes";
/// import interface



export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            element={route.component}
            key={route.key}
          />
        );
      }

      return null;
    });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route exact path="/Acceuil" element={<Acceuil />} />
     
        <Route path="/signin" element={<SignIn />} />
        <Route path="/qcm/:MATRICULLE" element={<Qcm/>} />
        
      <Route path="/test"  element={<Test />} />
      <Route path="/alert"  element={<Alert />} />
      <Route path="*" element={<Navigate to="/Acceuil" />} />
      
      </Routes>
    </ThemeProvider>
  );
}
