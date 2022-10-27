import { useState, useEffect } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { searchAnime } from "../../features/currentGenreOrCategory";
import { useStyles } from "./styles";
export default function Search() {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      dispatch(searchAnime(query));
    }
  }
  return (
    <div className={classes.searchContainer}>
      <TextField
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}
