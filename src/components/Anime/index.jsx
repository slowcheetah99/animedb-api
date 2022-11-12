import { useState, useEffect } from "react";
import { Pagination } from "../";
import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useGetAnimeQuery } from "../../services/animeDB";
import { AnimeList, FeaturedAnime } from "../index";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";

export default function Anime() {
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

  if (isFetching)
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );

  if (!data.data.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No anime...
          <br />
          Try again
        </Typography>
      </Box>
    );
  }

  if (error) {
    return "An error has occurred...";
  }

  return (
    <div>
      <FeaturedAnime anime={data.data[0]} />
      <AnimeList anime={data.data} />
      <Pagination
        currentPage={page}
        setPage={setPage}
        totalPages={data.meta.totalPage}
      />
    </div>
  );
}
