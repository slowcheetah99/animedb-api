import { Grid } from "@mui/material";
import { useStyles } from "./styles";
import { Card } from "../";

export default function AnimeList({ anime }) {
  const { classes } = useStyles();
  return (
    <Grid container className={classes.animeContainer}>
      {anime?.data.map((item, i) => (
        <Card key={item._id} i={i} anime={item} />
      ))}
    </Grid>
  );
}
