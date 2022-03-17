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
// import SuiTypography from "components/SuiTypography";
// import SuiInput from "components/SuiInput";
// import SuiButton from "components/SuiButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import thorJPG from "assets/images/thor.jpg";

import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
// import { getUserData } from "helper/api";
import { Button, FormControl, Input, InputLabel } from "@mui/material";
// import { Button } from "@mui/material";

function SignIn() {
  const navigate = useNavigate();

  const getUserDetail = useCallback((event) => {
    event.preventDefault();

    const body = JSON.stringify({
      username: event.target.username.value,
      password: event.target.password.value,
    });

    fetch(`http://localhost:8080/login`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("result", result);
        sessionStorage.setItem("userID", result.ID);
        switch (result.UserType) {
          case 0:
            console.log("bidder");
            navigate("/auction/detail?productID=1");
            break;

          default:
            console.log("seller");
            navigate("dashboard");
            break;
        }
      })
      .catch((err) => {
        console.log("catch", err);
      });
  });

  return (
    <CoverLayout
      title="Login Lelang"
      description="Masukkan email dan password anda"
      image={thorJPG}
    >
      <form onSubmit={getUserDetail}>
        <SuiBox mb={2}>
          <FormControl>
            <InputLabel>Username {sessionStorage.getItem("user_id")}</InputLabel>
            <Input id="username" name="username" />
          </FormControl>
        </SuiBox>
        <SuiBox mb={2}>
          <FormControl>
            <InputLabel>Password</InputLabel>
            <Input id="password" type="password" name="password" />
          </FormControl>
        </SuiBox>
        <SuiBox mt={4} mb={1}>
          <Button type="submit">Login</Button>
        </SuiBox>
      </form>
    </CoverLayout>
  );
}

export default SignIn;
