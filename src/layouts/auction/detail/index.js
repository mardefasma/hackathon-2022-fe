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
} from "@mui/material";
import Countdown from "react-countdown";

function Overview() {
  const productImageURL =
    "https://cdn0-production-images-kly.akamaized.net/u_9rueZlzAXmS7PiI1LrthnQ-oE=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2754932/original/005940800_1552970791-fotoHL_kucing.jpg";

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
          <Grid item xs={8}>
            <Card variant="outlined">
              <CardContent>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Detail Product
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Pet Shop Kekurangan Dana
                </Typography>
                <Typography variant="h5" component="div">
                  Kucing Tapi Buang Duit
                </Typography>
                <Countdown date={Date.now() + 10000} />
                <Stack direction="row" spacing={1}>
                  <Chip label="Bidding" color="primary" variant="outlined" />
                  <Chip label="Highest Bidder" color="success" variant="outlined" />
                  <Chip label="Ma**e Fa**a" color="success" />
                </Stack>
              </CardContent>
              <CardActions>
                <FormControl sx={{ m: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    value={1000000}
                    // onChange={handleChange("amount")}
                    startAdornment={<InputAdornment position="start">Rp.</InputAdornment>}
                    label="Bid"
                  />
                </FormControl>
                <Button size="small">Bid</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </SuiBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
