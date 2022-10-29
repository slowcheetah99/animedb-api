import { Grid } from "@mui/material";
import { useStyles } from "./styles";
import { Card } from "../";
import { Box, CircularProgress } from "@mui/material";

export default function AnimeList({ anime }) {
  const { classes } = useStyles();
  return (
    <Grid container className={classes.animeContainer}>
      {anime?.map((item, i) => (
        <Card key={item._id} i={i} anime={item} />
      ))}
    </Grid>
  );
}
