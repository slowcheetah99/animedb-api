import alanBtn from "@alan-ai/alan-sdk-web";
import { useThemeContext } from "./useThemeContext";
import { useDispatch } from "react-redux";
import {
  selectGenreOrCategory,
  searchAnime,
} from "../features/currentGenreOrCategory";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function useAlan() {
  const { setMode } = useThemeContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    alanBtn({
      key: import.meta.env.VITE_ALAN_AI_KEY,
      onCommand: ({ command, mode, genres, genre, query }) => {
        if (command === "chooseGenre") {
          const foundGenre = genres.find(
            (g) => g._id.toLowerCase() === genre.toLowerCase()
          );
          if (foundGenre) {
            {
              navigate("/");
              dispatch(selectGenreOrCategory(foundGenre._id));
            }
          }
        } else if (command === "changeMode") {
          if (mode === "light") {
            setMode("light");
          } else {
            setMode("dark");
          }
        }
        if (command === "search") {
          dispatch(searchAnime(query));
        }
      },
    });
  }, []);
}
