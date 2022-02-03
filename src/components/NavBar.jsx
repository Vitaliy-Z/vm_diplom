import React from "react";
import { ShoppingBagOutlined } from "@mui/icons-material";
import { AppBar, Toolbar, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <ShoppingBagOutlined sx={{ mr: 2 }} />
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          AKVA-Shop
        </Typography>
        <Typography variant="h6">вход/регистация</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
