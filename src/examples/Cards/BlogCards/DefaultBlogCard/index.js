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

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

function DefaultBlogCard({ product, action }) {
  return (
    <Card>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <SuiBox
            component="img"
            src={product.image}
            alt={product.title}
            width="100%"
            borderRadius="md"
          />
        </Grid>
        <Grid item xs={7}>
          <SuiBox pb={3} px={3}>
            <SuiBox display="block" mt={0.5} mb={1}>
              {action.type === "internal" ? (
                <Link to={action.route}>
                  <SuiTypography
                    display="inline"
                    variant="h5"
                    textTransform="capitalize"
                    className="color-background"
                  >
                    {product.name}
                  </SuiTypography>
                </Link>
              ) : (
                <MuiLink href={action.route} target="_blank" rel="noreferrer">
                  <SuiTypography
                    display="inline"
                    variant="h5"
                    textTransform="capitalize"
                    className="color-background"
                  >
                    {product.name}
                  </SuiTypography>
                </MuiLink>
              )}
            </SuiBox>
            <SuiTypography variant="body2" component="p" color="text">
              {product.status}
            </SuiTypography>
            <SuiTypography variant="body2" component="p" color="text">
              {product.current_bid}
            </SuiTypography>
            {/* <SuiTypography variant="body2" component="p" color="text">
              {product.highest_bidder}
            </SuiTypography> */}
            <Stack direction="row" spacing={1}>
              <Chip label="Bidding" color="primary" variant="outlined" />
              <Chip label="Highest Bidder" color="success" variant="outlined" />
              <Chip label="Ma**e Fa**a" color="success" />
            </Stack>
          </SuiBox>
        </Grid>
      </Grid>
    </Card>
  );
}

// Setting default props for the DefaultBlogCard
DefaultBlogCard.defaultProps = {
  product: false,
};

// Typechecking props for the DefaultBlogCard
DefaultBlogCard.propTypes = {
  product: PropTypes.oneOfType([
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      current_bid: PropTypes.string.isRequired,
      highest_bidder: PropTypes.string.isRequired,
    }),
    PropTypes.bool,
  ]),
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
  }).isRequired,
};

export default DefaultBlogCard;
