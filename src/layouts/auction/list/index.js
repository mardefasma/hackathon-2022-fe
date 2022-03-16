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
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiButton from "components/SuiButton";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DefaultBlogCard from "examples/Cards/BlogCards/DefaultBlogCard";

// Data

function Tables() {
  const sortType = 0;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          p: 1,
          m: 1,
          borderRadius: 1,
        }}
      >
        <FormControl>
          <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortType}
            label="Age"
            // onChange={handleChange}
          >
            <MenuItem value={0}>None</MenuItem>
            <MenuItem value={1}>Latest Added</MenuItem>
            <MenuItem value={2}>Active</MenuItem>
          </Select>
        </FormControl>
        <SuiButton href="/auction/add" mr={3}>
          Add Auction
        </SuiButton>
      </Box>
      <SuiBox py={3}>
        <DefaultBlogCard
          product={{
            image: "https://bit.ly/3kDZgRd",
            name: "Mathew Glock",
            status: "Bidding",
            current_bid: "50.000",
            highest_bidder: "100.000",
          }}
          action={{ type: "internal", route: "/auction/10" }}
        />
      </SuiBox>
      <SuiBox py={3}>
        <DefaultBlogCard
          product={{
            image: "https://bit.ly/3kDZgRd",
            name: "Mathew Glock 2",
            status: "Bidding",
            current_bid: "50.000",
            highest_bidder: "100.000",
          }}
          action={{ type: "internal", route: "/auction/11" }}
        />
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
