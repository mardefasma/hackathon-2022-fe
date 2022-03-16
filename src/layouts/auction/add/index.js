/* eslint-disable prettier/prettier */
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

// @mui material components
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from '@mui/lab/DateTimePicker';
import Button from '@mui/material/Button';

// Soft UI Dashboard React components

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Data

function Tables() {
  // const data = []

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid container spacing={2}>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            backgroundColor="#fff"
            p={5}
            my={5}
          >
            <h2>Add Auction</h2>
            <div>
              <TextField required id="standard-required" label="Product Name" variant="standard" />
            </div>
            <div>
              <TextField required id="standard-required" label="Image URL" variant="standard" />
            </div>
            <div>
              <FormControl sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="standard-adornment-amount">Initial Bid</InputLabel>
                <Input
                  id="standard-adornment-amount"
                  // value={values.amount}
                  // onChange={handleChange('amount')}
                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
              </FormControl>
            </div>
            <div>
              <FormControl sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="standard-adornment-amount">Multiplier</InputLabel>
                <Input
                  id="standard-adornment-amount"
                  // value={values.amount}
                  // onChange={handleChange('amount')}
                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
              </FormControl>
            </div>
            <div>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label="DateTimePicker"
                // value={value}
                // onChange={(newValue) => {
                //   setValue(newValue);
                // }}
              />
            </LocalizationProvider>
            </div>
            <div>
              <Button variant="outlined">Submit</Button>
            </div>
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
