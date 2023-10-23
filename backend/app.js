const express = require('express');
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

const playlist=[
  {
    "id":"1",
    "name":"comedy",
    "movies":[1,2,3,5,6]
  },
  {
    "id":"2",
    "name":"action",
    "movies":[4,5,6,1,2]
  },
  {
    "id":"3",
    "name":"horror",
    "movies":[7,8]
  }
]

const movies=[
  {
    "id": "1",
    "title": "The Matrix",
    "description": "A computer hacker learns the truth about reality when he joins a group of rebels fighting against machines that have enslaved humanity.",
    "image": "http://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg",

    duration: '124',
    director: 'Kenneth Branagh',
    rating: 8.7,
  },
  {
    "id": "2",
    "title": "Inception",
    "description": "A thief enters the subconscious of his targets to steal their secrets in this mind-bending heist movie.",
    "image": "http://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg",
    duration: '124',
    director: 'Kenneth Branagh',
    rating: 8.7
  },
  {
    "id": "3",
    "title": "The Shawshank Redemption",
    "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    "image": "http://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg",
  
    duration: '124',
    director: 'Kenneth Branagh',
    rating: 8.7
  },
  {
    "id": "4",
    "title": "Pulp Fiction",
    "description": "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    "image": "http://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg",
  
    duration: '124',
    director: 'Kenneth Branagh',
    rating: 8.7
  },
  {
    "id": "5",
    "title": "Interstellar",
    "description": "A group of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "image": "http://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg",
    duration: '124',
    director: 'Kenneth Branagh',
    rating: 8.7
  },
  {
    "id": "6",
    "title": "Forrest Gump",
    "description": "The life story of a man with a low IQ who accomplished great things in his lifetime.",
    "image": "http://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg",
    duration: '124',
    director: 'Kenneth Branagh',
    rating: 8.7
  },
  {
    "id": "7",
    "title": "Gladiator",
    "description": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    "image": "http://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg",
    duration: '124',
    director: 'Kenneth Branagh',
    rating: 8.7
  },
  {
    "id": "8",
    "title": "The Dark Knight",
    "description": "When the menace known as The Joker emerges, Batman must confront one of the greatest psychological and physical tests of his ability to fight injustice.",
    "image": "http://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg",
    duration: '124',
    director: 'Kenneth Branagh',
    rating: 8.7
  }
]

const rentmovies=[
  {
    "title": "Movie 1",
    "price": "9.99",
    "rating": 4.5,
    "imageUrl": "http://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg"
  },
  {
    "title": "Movie 2",
    "price": "12.99",
    "rating": 4.2,
    "imageUrl": "http://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg"
  },
  {
    "title": "Movie 3",
    "price": "10.99",
    "rating": 3.8,
    "imageUrl": "http://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg"
  },
  {
    "title": "Movie 4",
    "price": "8.99",
    "rating": 4.7,
    "imageUrl": "http://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg"
  },
  {
    "title": "Movie 5",
    "price": "11.99",
    "rating": 4.0,
    "imageUrl": "http://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg"
  },
  {
    "title": "Movie 6",
    "price": "14.99",
    "rating": 4.3,
    "imageUrl": "http://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg"
  },
  {
    "title": "Movie 7",
    "price": "9.49",
    "rating": 4.8,
    "imageUrl": "http://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg"
  },
  {
    "title": "Movie 8",
    "price": "13.99",
    "rating": 3.9,
    "imageUrl": "http://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg"
  },
  {
    "title": "Movie 9",
    "price": "12.49",
    "rating": 4.4,
    "imageUrl": "http://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg"
  },
  {
    "title": "Movie 10",
    "price": "15.99",
    "rating": 4.1,
    "imageUrl": "http://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg"
  }
]


// const recommendations=[
//   {
//     "id":1,
//     movies:[
//         {
//           "id": "2",
//           "title": "Inception",
//           "description": "A thief enters the subconscious of his targets to steal their secrets in this mind-bending heist movie.",
//           "image": "http://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg",
//           duration: '124',
//           director: 'Kenneth Branagh',
//           rating: 8.7
//         },
//         {
//           "id": "7",
//           "title": "Gladiator",
//           "description": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
//           "image": "http://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg",
//           duration: '124',
//           director: 'Kenneth Branagh',
//           rating: 8.7
//         },
//         {
//           "id": "8",
//           "title": "The Dark Knight",
//           "description": "When the menace known as The Joker emerges, Batman must confront one of the greatest psychological and physical tests of his ability to fight injustice.",
//           "image": "http://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg",
//           duration: '124',
//           director: 'Kenneth Branagh',
//           rating: 8.7
//         }
      
//     ]
//   },
//   {

//   }
// ]


// ... (previous code)

// Create a new array for movie recommendations
const recommendations = movies.map((movie) => {
  // Generate 3 random recommended movies (excluding the current movie)
  const recommendedMovieIds = getRandomMovieIds(3, movie.id, movies);
  const recommendedMovies = recommendedMovieIds.map((id) => movies.find((m) => m.id === id));

  return {
    id: movie.id,
    movies: recommendedMovies,
  };
});

function getRandomMovieIds(count, excludedId, movies) {
  const randomMovieIds = [];
  while (randomMovieIds.length < count) {
    const randomIndex = Math.floor(Math.random() * movies.length);
    const randomMovieId = movies[randomIndex].id;
    if (randomMovieId !== excludedId && !randomMovieIds.includes(randomMovieId)) {
      randomMovieIds.push(randomMovieId);
    }
  }
  return randomMovieIds;
}

app.get('/recommendations', (req, res) => {
  res.json(recommendations);
});

app.get('/recommendations/:id', (req, res) => {
  const movieId = req.params.id;
  const movie = movies.find((m) => m.id === movieId);

  if (!movie) {
    return res.status(404).json({ error: 'Movie not found' });
  }

  // Generate 3 random recommended movies (excluding the current movie)
  const recommendedMovieIds = getRandomMovieIds(3, movieId, movies);
  const recommendedMovies = recommendedMovieIds.map((id) => movies.find((m) => m.id === id));

  const recommendation = {
    id: movie.id,
    movies: recommendedMovies,
  };

  res.json(recommendation);
});


// ... (remaining code)

// Create a route to retrieve playlists and their movies
app.get('/playlists', (req, res) => {
  return res.json(playlist);
});

app.get('/rent-movies', (req, res) => {
  return res.json(rentmovies);
});
app.post('/check-product', (req, res) => {
  const chatHistory = req.body.chatHistory; // Assuming the message is sent in the request body

  // Generate some random resulcts data
  const results = movies;
  console.log(chatHistory.length);
    const userMessage=chatHistory[chatHistory.length-1].text;
  // Respond with the same user message and the random results
  const response = {
    answer: `You said, "${userMessage}"`,
    results: results,
  };

  res.json(response);
});

function generateRandomResults() {
  const results = [
    {
        title: 'Thor',
        description: 'The powerful, but arrogant god Thor, is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.',
        duration: '124',
        year: '2011',
        director: 'Kenneth Branagh',
        cast: ['Chris Hemsworth','Anthony Hopkins','Natalie Portman'],
        rating: 8.7,
        imdbLink: 'https://www.imdb.com/title/tt0800369/',
        poster:  'http://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg'
      },
      {
        title: 'The Shawshank Redemption',
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        duration: '142',
        year: '1994',
        director: 'Frank Darabont',
        cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
        rating: 9.3,
        imdbLink: 'https://www.imdb.com/title/tt0111161/',
        poster: "http://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg"
      },
      {
        title: 'The Silence of the Lambs',
        description: 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.',
        duration: '118',
        year: '1991',
        director: 'Jonathan Demme',
        cast: ['Jodie Foster', 'Anthony Hopkins', 'Lawrence A. Bonney'],
        rating: 8.6,
        imdbLink: 'https://www.imdb.com/title/tt0102926/',
        poster: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,677,1000_AL_.jpg"
      },
      {
        title: 'Spirited Away',
        description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
        duration: '125',
        year: '2001',
        director: 'Hayao Miyazaki',
        cast: ['Daveigh Chase', 'Suzanne Pleshette', 'Miyu Irino'],
        rating: 8.6,
        imdbLink: 'https://www.imdb.com/title/tt0245429/',
        poster: "http://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg"
      },
      {
        title: 'Starship Troopers',
        description: "Humans in a fascistic, militaristic future do battle with giant alien bugs in a fight for survival.",
        duration: '129',
        year: '1997',
        director: 'Paul Verhoeven',
        cast: ['Casper Van Dien', 'Denise Richards', 'Dina Meyer'],
        rating: 7.2,
        imdbLink: 'https://www.imdb.com/title/tttt0120201/',
        poster: "https://m.media-amazon.com/images/M/MV5BNThlOTFhOGEtZjE2NC00MzMzLThkYWItZjlkNWNlMDAzMGZkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,732,1000_AL_.jpg"
      },
  ]
  return results;
}

app.get('/movies/:id', (req, res) => {
  const movieId = req.params.id;
  const movie = movies.find((m) => m.id === movieId);

  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ error: 'Movie not found' });
  }
});

app.get('/recommend/:id', (req, res) => {
 
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
