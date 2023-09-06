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

/////////////////// REACT ROUTER PATHS ///////////////////
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/dist/index.html'));
});
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.get('/aboutPage', function(req, res) {
  res.sendFile(path.join(__dirname, './public/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.get('/kidVideosPage', function(req, res) {
  res.sendFile(path.join(__dirname, './public/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.get('/resourcePage', function(req, res) {
  res.sendFile(path.join(__dirname, './public/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.get('/tipsPage', function(req, res) {
  res.sendFile(path.join(__dirname, './public/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.get('/caregiverPage', function(req, res) {
  res.sendFile(path.join(__dirname, './public/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.get('/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, './public/dist/bundle.js'));
});

app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, './public/dist/index.html'));
});


/////////////////// SERVER PATHS  ///////////////////

app.get('/leaders', (req, res) => {
  axios.get(`${process.env.API}/leaders`)
  .then((leaders) => {
    res.status(200).send(leaders.data)
  })
  .catch((err) => {
    res.sendStatus(500);
  })
})

app.get('/tipstricks', (req, res) => {
  axios.get(`${process.env.API}/tipstricks`)
  .then((tips) => {
    res.status(200).send(tips.data)
  })
  .catch((err) => {
    res.sendStatus(500);
  })
})

app.get('/resources', (req, res) => {
  axios.get(`${process.env.API}/resources`)
  .then((resource) => {
    res.status(200).send(resource.data)
  })
  .catch((err) => {
    res.sendStatus(500);
  })
})

app.get('/kideos', (req, res) => {
  axios.get(`${process.env.API}/kideos`)
  .then((vids) => {
    res.status(200).send(vids.data);
  })
  .catch((err) => {
    res.sendStatus(500);
  })
})

app.get('/careVids', (req, res) => {
  axios.get(`${process.env.API}/careVids`)
  .then((vids) => {
    res.status(200).send(vids.data);
  })
  .catch((err) => {
    res.sendStatus(500);
  })
})

// server listens on designated port
app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`)
});
