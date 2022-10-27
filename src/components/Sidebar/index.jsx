import { useEffect } from "react";
import { BiMovie as Movie } from "react-icons/bi";
import { RiMovieFill as Genres } from "react-icons/ri";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from "@mui/material";

import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useStyles } from "./styles";
import { useGetGenresQuery } from "../../services/animeDB";
import { useSelector, useDispatch } from "react-redux";
import {
  selectGenreOrCategory,
  selectType,
} from "../../features/currentGenreOrCategory";
export default function Sidebar({ setMobileOpen }) {
  const { data, error, isFetching } = useGetGenresQuery();
  const { genreIdOrCategoryName, type } = useSelector(
    (state) => state.currentGenreOrCategory
  );

  const categories = [
    {
      icon: <Movie />,
      value: "Most Popular",
    },
    {
      icon: <Movie />,
      value: "TV",
    },
    {
      icon: <Movie />,
      value: "Movie",
    },
  ];
  const theme = useTheme();
  const { classes } = useStyles();
  const dispatch = useDispatch();
  return (
    <>
      <Link to="/" className={classes.imageLink}>
        Logo
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ icon, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem
              onClick={() => {
                value === "Most Popular"
                  ? dispatch(selectType(""))
                  : dispatch(selectType(value));
              }}
              button
              style={{ display: "flex", columnGap: "2px" }}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={value} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress size="4rem" />
          </Box>
        ) : (
          data.map((genre, i) => (
            <Link key={genre._id} className={classes.links} to="/">
              <ListItem
                onClick={() => {
                  dispatch(selectGenreOrCategory(genre._id));
                }}
                button
              >
                <ListItemIcon>
                  <Genres />
                </ListItemIcon>
                <ListItemText primary={genre._id} />
              </ListItem>
            </Link>
          ))
        )}
      </List>
    </>
  );
}
