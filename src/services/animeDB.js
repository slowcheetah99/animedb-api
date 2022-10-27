import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = import.meta.env.VITE_API_KEY;
// https://anime-db.p.rapidapi.com/anime

export const animeDB = createApi({
  reducerPath: "animeDB",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://anime-db.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", apiKey);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    //get all anime
    getAnime: builder.query({
      query: ({ genreIdOrCategoryName, page, type, searchQuery }) => {
        //get anime by search
        console.log(searchQuery);
        if (searchQuery) {
          return {
            url: "/anime",
            params: {
              page: page,
              size: "50",
              search: `${searchQuery}`,
              sortBy: "ranking",
              sortOrder: "asc",
            },
          };
        }
        //get anime by type (Most popular, tv or movie)
        else if (type) {
          return {
            url: "/anime",
            params: {
              page: page,
              size: "50",
              search: `${type}`,
              sortBy: "ranking",
              sortOrder: "asc",
            },
          };
        }
        //get anime by genre
        else if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === "string"
        ) {
          //get anime by genre
          return {
            url: "/anime",
            params: {
              page: page,
              size: "50",
              genres: genreIdOrCategoryName,
              type: "Movie",
              sortBy: "ranking",
              sortOrder: "asc",
            },
          };
        }
        //get popular anime(genre-less order)
        else {
          return {
            url: "/anime",
            params: {
              page: page,
              size: "50",
              sortBy: "ranking",
              sortOrder: "asc",
            },
          };
        }
      },
    }),
    //get genres
    getGenres: builder.query({
      query: () => {
        return {
          url: "/genre",
        };
      },
    }),
    //get all anime by genre
  }),
});

export const { useGetAnimeQuery, useGetGenresQuery } = animeDB;