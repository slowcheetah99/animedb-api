import { useStyles } from "./styles";
import { Typography, Button } from "@mui/material";
export default function Pagination({ currentPage, setPage, totalPages }) {
  const { classes } = useStyles();

  function handlePrev() {
    if (currentPage !== 1) setPage((prevPage) => prevPage - 1);
  }

  function handleNext() {
    if (currentPage !== totalPages) setPage((prevPage) => prevPage + 1);
  }

  if (totalPages === 0) return null;
  return (
    <div className={classes.container}>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        type="button"
        onClick={handlePrev}
      >
        Prev
      </Button>
      <Typography variant="h5" className={classes.pageNumber}>
        {currentPage}
      </Typography>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        type="button"
        onClick={handleNext}
      >
        Next
      </Button>
    </div>
  );
}
