import { Search } from "@mui/icons-material";
import {
  IconButton,
  InputBase,
  Paper
  //   TextField
} from "@mui/material";
import React, { useState } from "react";
// import PropTypes from 'prop-types';

const SeachField = () => {
  const [seachValue, setSeachValue] = useState("");

  const handleChange = ({ target }) => {
    setSeachValue(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(seachValue);
    setSeachValue("");
  };

  return (
    // <TextField
    //   variant="outlined"
    //   label="🔎 Поиск..."
    //   value={seachValue}
    //   onChange={handleChange}
    //   margin="normal"
    //   fullWidth
    // ></TextField>

    <Paper
      component="form"
      elevation={3}
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        maxWidth: 500,
        m: "20px auto"
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Поиск..."
        value={seachValue}
        onChange={handleChange}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={handleSubmit}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

SeachField.propTypes = {};

export default SeachField;
