/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// import { useState } from "react";

// react-router-dom components
// import { Link } from "react-router-dom";

// @mui material components
// import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import thorJPG from "assets/images/thor.jpg";

import { useNavigate } from "react-router-dom";

function SignIn() {
  // const [rememberMe, setRememberMe] = useState(true);

  // const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const navigate = useNavigate();

  function handleClickLogin() {
    navigate("/auction/detail");
  }

  return (
    <CoverLayout
      title="Login Lelang"
      description="Masukkan email dan password anda"
      image={thorJPG}
    >
      <SuiBox component="form" role="form">
        <SuiBox mb={2}>
          <SuiBox mb={1} ml={0.5}>
            <SuiTypography component="label" variant="caption" fontWeight="bold">
              Email
            </SuiTypography>
          </SuiBox>
          <SuiInput type="email" placeholder="Email" />
        </SuiBox>
        <SuiBox mb={2}>
          <SuiBox mb={1} ml={0.5}>
            <SuiTypography component="label" variant="caption" fontWeight="bold">
              Password
            </SuiTypography>
          </SuiBox>
          <SuiInput type="password" placeholder="Password" />
        </SuiBox>
        <SuiBox mt={4} mb={1}>
          <div onClick={handleClickLogin}>
            <SuiButton variant="gradient" color="info" fullWidth>
              Login
            </SuiButton>
          </div>
        </SuiBox>
      </SuiBox>
    </CoverLayout>
  );
}

export default SignIn;
