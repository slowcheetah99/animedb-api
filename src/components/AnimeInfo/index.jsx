import {
  Modal,
  Typography,
  Button,
  ButtonGroup,
  Grid,
  Box,
  CircularProgress,
  useMediaQuery,
  Rating,
  Divider,
} from "@mui/material";
import {
  Movie as MovieIcon,
  Language,
  PlusOne,
  Favorite,
  FavoriteBorderOutlined,
  ArrowBack,
} from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";

import axios from "axios";
import { useGetOneAnimeQuery } from "../../services/animeDB";
import { useStyles } from "./styles";
import { SimilarAnime } from "../";
export default function AnimeInfo() {
  const { id } = useParams();
  const { classes } = useStyles();
  const { data, isFetching, error } = useGetOneAnimeQuery(id);
  const dispatch = useDispatch();
  if (isFetching)
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem"></CircularProgress>
      </Box>
    );

  if (error)
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link to="/">Something has gone wrong - Go Back</Link>
      </Box>
    );
  return (
    <Grid container className={classes.containerSpaceAround}>
      <Grid
        item
        container
        style={{ minHeight: "fit-content", marginBottom: "10vh" }}
        className={classes.animeContainer}
      >
        <Grid item sm={12} lg={4}>
          <img className={classes.poster} src={data?.image} alt={data?.title} />
        </Grid>
        <Grid item container direction="column" lg={7}>
          <Typography variant="h5" align="left" gutterBottom={true}>
            {data?.title}
          </Typography>
          <Divider style={{ marginBottom: "20px" }} />
          <Typography variant="h6" style={{ marginBottom: "2px" }}>
            Alternative Titles
          </Typography>
          <Divider style={{ marginBottom: "10px" }} />

          <Grid
            item
            display="flex"
            columnGap="10px"
            rowGap="5px"
            flexWrap="wrap"
            marginBottom="20px"
          >
            {data?.alternativeTitles.map((title, i) => (
              <Typography
                variant="subtitle2"
                key={i}
                style={{ borderRight: "2px solid #ccc", paddingRight: "10px" }}
              >
                {title}
              </Typography>
            ))}
          </Grid>
          <Typography variant="h6">Genres</Typography>
          <Divider style={{ marginBottom: "10px" }} />

          <Grid item className={classes.genresContainer}>
            {data?.genres?.map((genre, i) => (
              <Link
                to="/"
                className={classes.links}
                onClick={() => {
                  dispatch(selectGenreOrCategory(genre._id));
                }}
                key={i}
              >
                <Typography variant="caption" style={{ fontWeight: "bold" }}>
                  {genre}
                </Typography>
              </Link>
            ))}
          </Grid>
          <Typography variant="h6">Metadata</Typography>
          <Divider style={{ marginBottom: "10px" }} />
          <Grid item className={classes.episodes}>
            <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>
              Episodes
            </Typography>
            <Typography variant="subtitle2">{data.episodes}</Typography>
          </Grid>

          <Grid item className={classes.episodes}>
            <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>
              Status
            </Typography>
            <Typography variant="subtitle2">
              {data?.hasEpisode ? "Finished Airing" : "Airing"}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Typography
        variant="h5"
        gutterBottom={true}
        style={{ marginTop: "10px" }}
      >
        Overview
      </Typography>
      <Typography style={{ marginBottom: "2rem" }} variant="subtitle2">
        {data.synopsis}
      </Typography>

      <Typography variant="h5" gutterBottom={true}>
        You might also like
      </Typography>
      <SimilarAnime />
    </Grid>
  );
}
