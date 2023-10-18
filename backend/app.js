const express = require('express');
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.post('/check-product', (req, res) => {
  const userMessage = req.body.userMessage; // Assuming the message is sent in the request body

  // Generate some random results data
  const results = generateRandomResults(10);

  // Respond with the same user message and the random results
  const response = {
    answer: `You said, "${userMessage}"`,
    results: results,
  };

  res.json(response);
});

function generateRandomResults(count) {
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


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});