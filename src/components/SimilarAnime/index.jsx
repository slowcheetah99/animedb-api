import { useState } from "react";
import { useGetAnimeQuery } from "../../services/animeDB";
import { Box, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { AnimeList } from "../";
import { useSelector, useDispatch } from "react-redux";

export default function SimilarAnime() {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName, type, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const { data, error, isFetching } = useGetAnimeQuery({
    genreIdOrCategoryName,
    page,
    type,
    searchQuery,
  });

  const dispatch = useDispatch();

  if (isFetching)
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem"></CircularProgress>
      </Box>
    );

  if (error)
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link to="/">Something has gone wrong - Go Back</Link>
      </Box>
    );
  const slicedData = data.data.length > 15 ? data.data.slice(0, 15) : data.data;
  return (
    <div>
      <AnimeList
        anime={slicedData}
        onClick={() => {
          dispatch(selectGenreOrCategory(genre._id));
        }}
      />
    </div>
  );
}
