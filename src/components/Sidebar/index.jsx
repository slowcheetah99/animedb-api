import { useEffect } from "react";
import { BiMovie as Movie } from "react-icons/bi";
import { RiMovieFill as Genres } from "react-icons/ri";
import { searchAnime } from "../../features/currentGenreOrCategory";
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
import { useGetAnimeQuery, useGetGenresQuery } from "../../services/animeDB";
import { useSelector, useDispatch } from "react-redux";
import {
  selectGenreOrCategory,
  selectType,
} from "../../features/currentGenreOrCategory";

export default function Sidebar({ setMobileOpen }) {
  const { data, error, isFetching } = useGetGenresQuery();

  //use has episodes as param to check this
  const categories = ["Most Popular", "Upcoming", "Airing"];

  //use the type param as checker for this
  const filters = ["TV", "Movie", "ONA", "OVA"];

  const { genreIdOrCategoryName, type } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const theme = useTheme();
  const { classes } = useStyles();
  const dispatch = useDispatch();
  return (
    <>
      <Link
        to="/"
        className={classes.imageLink}
        onClick={() => dispatch(searchAnime(""))}
      >
        Logo
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map((category, i) => (
          <Link key={i} className={classes.links} to="/">
            <ListItem
              onClick={() => {
                category === "Most Popular"
                  ? dispatch(selectType(""))
                  : dispatch(selectType(category));
              }}
              button
              style={{ display: "flex", columnGap: "10px" }}
            >
              <Movie />
              <ListItemText primary={category} className={classes.linkText} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />

      <List>
        <ListSubheader>Types</ListSubheader>
        {filters.map((filter, i) => (
          <Link key={i} className={classes.links} to="/">
            <ListItem
              onClick={() => {
                dispatch(selectType(filter));
              }}
              button
              style={{ display: "flex", columnGap: "10px" }}
            >
              <Movie />
              <ListItemText primary={filter} className={classes.linkText} />
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
                style={{ display: "flex", columnGap: "10px" }}
                className={classes.linkText}
              >
                <Genres />
                <ListItemText primary={genre._id} />
              </ListItem>
            </Link>
          ))
        )}
      </List>
    </>
  );
}
