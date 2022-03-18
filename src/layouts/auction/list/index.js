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

import React, { useEffect, useState } from 'react';
// Data

function Tables() {
  const sortType = 0;
  const [ auctionList, setAuctionList ] = useState([]);
  const UserID = sessionStorage.getItem("userID");


  async function getAuctions() {
    await fetch(`http://localhost:8080/get/auction/list?&user_id=${UserID}`)
      .then((res) => res.json())
      .then((result) => {
        setAuctionList(result.ProductDetail)
      })
      .catch((err) => {
        console.log("catch", err);
      });
  }
console.log(auctionList)
  useEffect(() => {
    getAuctions();
  }, []);

  const listItems = auctionList.map((x) => 
      <DefaultBlogCard
        product={{
          image: x.Product.ImageURL,
          name: x.Product.ProductName,
          status: x.Auction.Status === 1 ? "Bidding" : "No Bid",
          current_bid: x.HighestBid,
          highest_bidder: x.HighestBid,
        }}
        action={{ type: "internal", route: "/auction/detail?10" }}
      />
  );

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
        <div>{listItems}</div>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
