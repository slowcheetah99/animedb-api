import { Typography, Grid, Grow, Tooltip, Rating } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchAnime } from "../../features/currentGenreOrCategory";
import { useStyles } from "./styles";
export default function Card({ anime, i }) {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  //add the first two words and remove numbers from them
  const searchTerm = `${anime.title.split(" ")[0]} ${
    anime.title.split(" ")[1]
      ? anime.title.split(" ")[1].replace(/[0-9]/g, "")
      : ""
  }`;
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.anime}>
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Link
          className={classes.links}
          to={`/anime/${anime._id}`}
          onClick={() => dispatch(searchAnime(searchTerm))}
        >
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
            <Typography variant="subtitle1" className={classes.linkText}>
              Ranking
            </Typography>
            <Typography variant="subtitle1" className={classes.linkText}>
              {anime.ranking}
            </Typography>
          </div>
        </Link>
      </Grow>
    </Grid>
  );
}
