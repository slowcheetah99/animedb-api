const genres = [
  {
    _id: "Award Winning",
  },

  {
    _id: "Action",
  },

  {
    _id: "Suspense",
  },

  {
    _id: "Horror",
  },

  {
    _id: "Ecchi",
  },

  {
    _id: "Avant Garde",
  },

  {
    _id: "Sports",
  },

  {
    _id: "Supernatural",
  },

  {
    _id: "Fantasy",
  },

  {
    _id: "Gourmet",
  },

  {
    _id: "Boys Love",
  },

  {
    _id: "Drama",
  },

  {
    _id: "Comedy",
  },

  {
    _id: "Mystery",
  },

  {
    _id: "Girls Love",
  },

  {
    _id: "Slice of Life",
  },

  {
    _id: "Adventure",
  },

  {
    _id: "Romance",
  },

  {
    _id: "Sci-Fi",
  },

  {
    _id: "Erotica",
  },

  {
    _id: "Hentai",
  },
];

intent(
  ["What does this app do?", "What can I do here?", "What is this app about?"],
  (p) => {
    p.play({ command: "openInfo" });
    p.play(
      "This is AniMotion, an app that allows you to browse anime by ranking, find information about them through search and also see anime similar to your results. Try saying: 'Go to SUpernatural', 'Search for Gintama', 'I want to get scared, 'Make me laugh', 'Make it dark', 'Make it light'"
    );
  }
);

const stringifiedGenres = genres
  .map((genre) => genre._id.toLowerCase())
  .join("|");

intent(
  `go to $(GENRE ${stringifiedGenres} |top rated|popular|upcoming)`,
  (p) => {
    p.play(`Going to ${p.GENRE.value} category`);
    p.play({ command: "chooseGenre", genre: p.GENRE.value, genres, p });
  }
);

intent("Search for $(QUERY* (.*))", (p) => {
  p.play(`Searching for ${p.QUERY.value}`);
  p.play({ command: "search", query: p.QUERY.value });
});

intent(["It's Halloween", "I want to get scared"], (p) => {
  p.play({ command: "chooseGenre", genre: "Horror", genres, p });
  p.play(
    "When witches go riding and black cats are seen, the moon laughs and whispers, 'It's Halloween!'"
  );
});

intent("Surprise me!", (p) => {
  const selectedCategory =
    genres[Math.floor(Math.random() * genres.length)]._id;
  p.play(`Sounds good. Enjoy some ${selectedCategory} movies`);
  p.play({ command: "chooseGenre", genre: selectedCategory, genres, p });
});

intent(["Give me something funny", "I want to laugh"], (p) => {
  p.play({ command: "chooseGenre", genre: "Comedy", genres, p });
  p.play("Comedy it is, enjoy!");
});

intent("Make it dark", (p) => {
  p.play("Even Shiki wasn't as dark as this, Nightowl!");
  p.play({ command: "changeMode", mode: "dark" });
});

intent("Make it light", (p) => {
  p.play("uhhhhhhh! Okay?!");
  p.play({ command: "changeMode", mode: "light" });
});
