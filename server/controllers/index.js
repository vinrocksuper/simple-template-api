const fs = require('fs');
const movies = JSON.parse(fs.readFileSync(`${__dirname}/../../data/movies.json`));



const hostIndex = (req, res) => {
  res.render('index');
};

const getData = (req, res) => {
  res.json(movies.filter(movie => movie.title === 'Gone with the Wind'));
}

const hostResults = (req, res) => {
  let results = movies;

  if (req.query.title) {
    results = results.filter(movie => movie.title.includes(req.query.title));
  }

  if (req.query.year) {
    const year = parseInt(req.query.year, 10);
    results = results.filter(movie => movie.year === year);
  }

  if (req.query.starring) {
    results = results.filter(movie => movie.cast.includes(req.query.starring));
  }

  // console.log(req.query);
  res.render('results', { movies: results , search: req.query});
}

const notFound = (req, res) => {
  res.status(404).render('notFound', {
    page: req.url,
  });
};

module.exports = {
  index: hostIndex,
  notFound,
  getData,
  results: hostResults,
};
