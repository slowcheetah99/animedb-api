import { Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { Characters, Anime, AnimeInfo, Navbar, Profile } from "./components";
import { useStyles } from "./styles";
import { useRef } from "react";
// import { useAlan } from "./hooks/useAlan";
function App() {
  const { classes } = useStyles();
  // const alanRef = useRef();
  // useAlan();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path="/" element={<Anime />} />
          <Route path="/anime/:id" element={<AnimeInfo />} />
          <Route path="/anime/:id/characters" element={<Characters />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
      {/* commented out due to AlanAI not being available in production without a development plan */}
      {/* <div ref={alanRef} /> */}
    </div>
  );
}

export default App;
