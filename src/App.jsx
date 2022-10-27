import { Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { Characters, Anime, AnimeInfo, Navbar, Profile } from "./components";
import { useStyles } from "./styles";
function App() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path="/" element={<Anime />} />
          {/* display similar anime on same page as anime */}
          {/* <Route path="/anime/similar" element={<h1>Similar Anime</h1>} /> */}
          {/* display similar anime here */}
          <Route path="/anime/:id" element={<AnimeInfo />} />
          <Route path="/anime/:id/characters" element={<Characters />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
