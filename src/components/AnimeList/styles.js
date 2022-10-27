import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  animeContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    overflow: "auto",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
}));
