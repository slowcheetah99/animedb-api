import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { useStyles } from "./styles";
import { Link } from "react-router-dom";
import bgImg from "../../assets/fma.jpg";

export default function FeaturedAnime({ anime }) {
  const { classes } = useStyles();
  console.log(anime);
  if (!anime) {
    return null;
  }
  return (
    <Box
      component={Link}
      to={`/anime/${anime._id}`}
      className={classes.featuredCardContainer}
    >
      <Card className={classes.card} classes={{ root: classes.cardRoot }}>
        <CardMedia
          media="image"
          alt={anime.title}
          image={bgImg}
          title={anime.title}
          className={classes.cardMedia}
        />
        <Box padding="20px">
          <CardContent
            className={classes.cardContent}
            classes={{ root: classes.cardContentRoot }}
          >
            <Typography variant="h6" gutterBottom={true}>
              {anime.title}
            </Typography>
            <div className={classes.genres}>
              {anime.genres.map((genre, i) => (
                <Typography
                  variant="caption"
                  gutterBottom={true}
                  key={i}
                  className={classes.genre}
                >
                  {genre}
                </Typography>
              ))}
            </div>

            <div className={classes.genres}>
              {anime?.alternativeTitles?.map((title, i) => (
                <Typography variant="caption" gutterBottom={true} key={i}>
                  {title}
                </Typography>
              ))}
            </div>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}
