import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  featuredCardContainer: {
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
    height: "290px",
    textDecoration: "none",
  },
  card: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
  },
  cardRoot: {
    position: "relative",
  },
  cardMedia: {
    position: "absolute",
    top: "0",
    left: "0",
    height: "100%",
    width: "100%",
    objectFit: "cover",
    objectPosition: "top",
    backgroundColor: "rgba(0, 0, 0, 0.575)",
    backgroundBlendMode: "darken",
    imageRendering: "crisp-edges",
  },
  cardContent: {
    color: "#f1f1f1",
    width: "65%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  cardContentRoot: {
    position: "relative",
    backgroundColor: "transparent",
  },
  genres: {
    display: "flex",
    columnGap: "10px",
  },
  genre: {
    backgroundColor: "#1e1e1e",
    padding: "2px 10px",
    borderRadius: "9999px",
  },
}));
