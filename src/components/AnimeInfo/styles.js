import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  containerSpaceAround: {
    display: "flex",
    justifyContent: "space-around",
    margin: "10px 0 !important",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      flexWrap: "wrap",
    },
  },

  animeContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  poster: {
    borderRadius: "20px",
    boxShadow: "0.5em 1em 1em rgba(0, 0, 0, 0.35)",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      margin: "0 auto",
      width: "5%",
      height: "500px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
      width: "80%",
      height: "350px",
      marginBottom: "30px",
    },
  },

  genresContainer: {
    margin: "0px 0 10px !important",
    display: "flex",
    justifyContent: "flex-start",
    columnGap: "20px",
    flexWrap: "wrap",
  },

  links: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    textDecoration: "none",
    background: theme.palette.mode === "dark" ? "#1e1e1e" : "#ccc",
    color: theme.palette.mode === "dark" ? "#ccc" : "#1e1e1e",
    padding: "5px 10px",
    borderRadius: "9999px",

    [theme.breakpoints.down("sm")]: {
      padding: "0.5rem 1rem",
    },
    color: theme.palette.text.primary,
  },

  synopsis: {
    wordBreak: "break-all",
  },
  episodes: {
    display: "flex",
    width: "50%",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
}));
