require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const axios = require('axios');

app.use(express.static(path.join(__dirname, "./public/dist")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/dist/index.html'));
});

app.get('/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, './public/dist/bundle.js'));
});

app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, './public/dist/index.html'));
});

app.get('/leaders', (req, res) => {
  axios.get(`${process.env.API}/leaders`)
  .then((leaders) => {
    res.send(leaders.data).status(201)
  })
  .catch((err) => {
    res.sendStatus(500);
  })
})

app.get('/tipstricks', (req, res) => {
  axios.get(`${process.env.API}/tipstricks`)
  .then((tips) => {
    res.send(tips.data).status(201)
  })
  .catch((err) => {
    res.sendStatus(500);
  })
})

app.get('/resources', (req, res) => {
  axios.get(`${process.env.API}/resources`)
  .then((resource) => {
    res.send(resource.data).status(201)
  })
  .catch((err) => {
    res.sendStatus(500);
  })
})

app.get('/kideos', (req, res) => {
  axios.get('https://www.googleapis.com/youtube/v3/search', {params: {
    q: 'ms. rachel',
    part: 'snippet',
    key: `${process.env.YT_KEY}`
  }})
  .then((vids) => {
    res.send(vids.data.items).status(200)
  })
  .catch((err) => {
    console.log(err.message)
    res.sendStatus(500);
  })
})

// server listens on designated port
app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`)
});
