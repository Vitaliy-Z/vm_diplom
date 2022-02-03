import { Grid } from "@mui/material";
import React from "react";
import CategoriesList from "../components/CategoriesList";
// import PropTypes from 'prop-types';

const MainPage = () => {
  return (
    <Grid container spacing={{ sm: 1, md: 3, lg: 5 }}>
      <Grid item xs={0} sm={3}>
        <CategoriesList />
      </Grid>
      <Grid item xs={12} sm={9}>
        <div style={{ backgroundColor: "blue", height: 100 }}></div>
      </Grid>
    </Grid>
  );
};

MainPage.propTypes = {};

export default MainPage;
