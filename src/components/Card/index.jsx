import { Typography, Grid, Grow, Tooltip, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";
export default function Card({ anime, i }) {
  const { classes } = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.anime}>
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Link className={classes.links} to={`/anime/${anime._id}`}>
          <img
            src={
              anime.image ? anime.image : "https://www.fillmurray.com/200/300"
            }
            alt={anime.title}
            className={classes.image}
          />
          <Typography className={classes.title} variant="h6">
            {anime.title}
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <p>Ranking</p>
            <p>{anime.ranking}</p>
          </div>
        </Link>
      </Grow>
    </Grid>
  );
}
