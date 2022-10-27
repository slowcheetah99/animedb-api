import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  anime: {
    padding: "10px",
  },
  title: {
    color: theme.palette.text.primary,
    textOverflow: "ellipsis",
    width: "230px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    marginTop: "10px",
    marginBottom: "0",
    textAlign: "left",
    marginLeft: "20px",
  },
  links: {
    alignItems: "center",
    fontWeight: "bolder",
    textDecoration: "none",
    overflow: "hidden",
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  image: {
    borderRadius: "20px",
    height: "300px",
    objectFit: "cover",
    marginBottom: "10px",
    transition: "all .5s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
}));
