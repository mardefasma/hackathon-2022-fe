/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
// @mui material components
import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";

// @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
// import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
// import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
// import ProfilesList from "examples/Lists/ProfilesList";
// import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
// import PlaceholderCard from "examples/Cards/PlaceholderCard";
// import DefaultPricingCard from "examples/Cards/PricingCards/DefaultPricingCard";

// Overview page components
// import Header from "layouts/profile/components/Header";
// import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
// import profilesListData from "layouts/profile/data/profilesListData";

// Images
// import homeDecor1 from "assets/images/home-decor-1.jpg";
// import homeDecor2 from "assets/images/home-decor-2.jpg";
// import homeDecor3 from "assets/images/home-decor-3.jpg";
// import team1 from "assets/images/team-1.jpg";
// import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Stack,
  Chip,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Snackbar,
  Alert,
  Input,
} from "@mui/material";
import Countdown from "react-countdown";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

function PDPDetail() {
  const [open, setOpen] = useState(false);
  const [currentBid, setCurrentBid] = useState(0);
  const [wantToBid, setWantToBid] = useState(0);
  const [productImageURL, setProductImageURL] = useState("");
  const [productName, setProductName] = useState("");
  const [auctionMultiplier, setAuctionMultiplier] = useState(0);
  const [auctionWinnerUserID, setAuctionWinnerUserID] = useState(0);
  const [countdownRemaining, setCountdownRemaining] = useState(0);
  const [highestBidderUserID, setHighestBidderUserID] = useState(0);
  const [highestBidderUsername, setHighestBidderUsername] = useState("");
  const [runningCountdown, setRunningCountdown] = useState(false);
  const timeNow = useRef(Date.now())
  // let countdownRemaining = 0;

  const [searchParams] = useSearchParams();
  console.log(searchParams.get("productID"))
  const productID = searchParams.get("productID");
  const UserID = sessionStorage.getItem("userID");
  console.log(productID, UserID)

  const handleClick = () => {
    setOpen(true);
  };

  const onSubmitBidAmount = useCallback((event) => {
    event.preventDefault();

    const body = JSON.stringify({
      UserID: parseInt(UserID, 10),
      ProductID: parseInt(productID, 10),
      Amount: parseInt(event.target.amount.value, 10),
    });

    console.log("amount", event.target.amount.value)
    fetch(`http://localhost:8080/auction/bid`, {
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
        setOpen(true);
      })
      .catch((err) => {
        console.log("catch", err);
      });
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const setProduct = useCallback((product) => {
    setProductImageURL(product.ImageURL)
    setProductName(product.ProductName)
  }, []);

  const setAuction = useCallback((auction) => {
    setAuctionMultiplier(auction.Multiplier);
    setAuctionWinnerUserID(auction.WinnerUserID);
  }, []);

  const setHighestBidder = useCallback((highestBidder) => {
    setHighestBidderUserID(highestBidder.ID)
    setHighestBidderUsername(highestBidder.Username)
  }, [])

  async function getProduct() {
    await fetch(`http://localhost:8080/get/auction/detail?product_id=${productID}&user_id=${UserID}`)
      .then((res) => res.json())
      .then((result) => {
        console.log("result", result);
        const { ProductDetail } = result;
        console.log("ProductDetail", ProductDetail);
        const { Product, Auction, HighestBidder, Countdown: CountdownLeft } = ProductDetail
        console.log(Product.ImageURL)
        setProduct(Product);
        setAuction(Auction);
        setHighestBidder(HighestBidder);
        console.log(Date.now() + (CountdownLeft * 1000))
        setCountdownRemaining(CountdownLeft);
        setRunningCountdown(true)
      })
      .catch((err) => {
        console.log("catch", err);
      });
  }

  useEffect(() => {
    getProduct();
  }, []);

  const renderCountdown = () => (
    <Countdown date={Date.now() + countdownRemaining}>
      <Chip label="Dah Abis" color="secondary" />
    </Countdown>
  )

  return (
    <DashboardLayout>
      <SuiBox mt={5} mb={3}>
        <Grid container>
          <Grid item xs={4}>
            <CardContent>
              <img
                src={productImageURL}
                alt="Product"
                style={{ maxWidth: "-webkit-fill-available", maxHeight: "-webkit-fill-available" }}
              />
            </CardContent>
          </Grid>
          <Grid item xs={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Detail Product
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Pet Shop Kekurangan Dana
                </Typography>
                <Typography variant="h5" component="div">
                  {productName}
                </Typography>
                <Typography variant="h4" component="div">
                  Rp. {currentBid}
                </Typography>
                <div>
                  {countdownRemaining > 0 ? renderCountdown() : null}
                </div>
                <Stack direction="row" spacing={1}>
                  {highestBidderUserID !== UserID ? <Chip label="Bidding" color="primary" variant="outlined" /> : null}
                  {highestBidderUserID === UserID ? <Chip label="Highest Bidder" color="success" variant="outlined" /> : null}
                  {highestBidderUserID !== 0 ? <Chip label={highestBidderUsername} color="success" /> : null}
                </Stack>
              </CardContent>
              <CardActions>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Multipliernya: {auctionMultiplier}
                </Typography>
                <form onSubmit={onSubmitBidAmount}>
                  <FormControl>
                    <InputLabel>Amount </InputLabel>
                    <Input id="amount" name="amount" />
                  </FormControl>
                  <Button size="small" type="submit">
                    Bid
                  </Button>
                </form>
                <Snackbar
                  anchorOrigin={{ vertical: "top", horizontal: "center" }}
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
                    THANK YOU!!! You success bidding this item
                  </Alert>
                </Snackbar>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </SuiBox>

      <Footer />
    </DashboardLayout>
  );
}

export default PDPDetail;
