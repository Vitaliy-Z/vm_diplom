import { ArrowForwardIos } from "@mui/icons-material";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import React, { useEffect, useState } from "react";
import API from "../api";
// import PropTypes from 'prop-types';

const CategoriesList = () => {
  const [allcategories, setAllcategories] = useState();

  useEffect(() => {
    API.categories.fetchAll().then((data) => setAllcategories(data));
  }, []);

  const [selectedCategory, setSelectedCategory] = React.useState();

  const handleListItemClick = (id) => () => {
    setSelectedCategory(id);
  };

  return (
    <Box sx={{ border: "1px solid grey", borderRadius: 1, boxShadow: 2 }}>
      {allcategories && (
        <List component="nav" disablePadding>
          {allcategories.map((category) => (
            <div key={category.id}>
              <ListItemButton
                selected={selectedCategory === category.id}
                onClick={handleListItemClick(category.id)}
                divider
                disableGutters
              >
                <ListItemIcon>
                  <ArrowForwardIos
                    sx={
                      selectedCategory === category.id
                        ? {
                            transform: "rotate(90deg)",
                            transition: "transform 200ms"
                          }
                        : {}
                    }
                  />
                </ListItemIcon>
                <ListItemText primary={category.name} />
              </ListItemButton>
            </div>
          ))}
        </List>
      )}
    </Box>
  );
};

CategoriesList.propTypes = {};

export default CategoriesList;
