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
  res.sendFile(path.join(__dirname, '../public/dist/index.html'));
});

app.post('/', (req, res) => {
});

app.get('/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/dist/bundle.js'));
});

app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/dist/index.html'));
});

app.get('/0f4328edd6df3f5cd6c6.png', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/dist/0f4328edd6df3f5cd6c6.png'));
});

//HOMEPAGE ROUTES

//GET all trending
app.get('/trending', (req, res) => {
  //make a request to the back end server
  axios.get(`${process.env.API_URL}/trending`)
    .then((result) => {
      res.status(200).send(result.data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });

});

//GET searched
app.get('/search', (req, res) => {
  let term = req.query.searchTerm;
  axios.get(`${process.env.API_URL}/search`, { params: { term: term } })
    .then((result) => {
      res.status(200).send(result.data);
    })
    .catch((err) => {
      console.log(err);
    })
});

//GET all from selected genre
app.get('/genre', (req, res) => {

});

//GET all from selected pub date range
app.get('/published', (req, res) => {

});

//GET details for selected books
app.get('/detail', (req, res) => {
  let bookId = req.query.bookId;
  axios.get(`${process.env.API_URL}/detail`, { params: { bookId: bookId } })
    .then((result) => {
      res.status(200).send(result.data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

// PROFILE ROUTES ****************************************

// GET all reviews for a specific user
app.get('/reviews/:username', (req, res) => {
  var username = req.params.username;
  axios.get(`${process.env.API_URL}/reviews/${username}`)
    .then((data) => {
      res.status(200).send(data.data);
    })
    .catch((error) => {
      res.status(400).send(error);
    })
});

// GET user's personal information
app.get('/personalInformation/:username', (req, res) => {
  var username = req.params.username;
  axios.get(`${process.env.API_URL}/personalInformation/${username}`)
    .then((data) => {
      res.status(200).send(data.data);
    })
    .catch((error) => {
      res.status(400).send(error);
    })
});

// GET user's public-facing information
app.get('/public/:username', (req, res) => {
  var username = req.params.username;
  axios.get(`${process.env.API_URL}/public/${username}`) // not working here?
    .then((data) => {
      res.status(200).send(data.data);
    })
    .catch((error) => {
      res.status(400).send(error);
    })
});

// POST to update user's personal information
app.post('/personalInformation/:username', (req, res) => {
  var username = req.params.username;
  axios.post(`${process.env.API_URL}/personalInformation/${username}`, req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      res.status(400).send(error);
    })
});


// GET all reviews for a specific book_id
app.get('/bookReviews/:book_id', (req, res) => {
  var book_id = req.params.book_id;
  axios.get(`${process.env.API_URL}/bookReviews/${book_id}`)
    .then((data) => {
      res.status(200).send(data.data);
    })
    .catch((error) => {
      res.status(400).send(error);
    })
});

app.post('/reviews/:book_id', (req, res) => {
  var book_id = req.params.book_id;
  axios.post(`${process.env.API_URL}/review/${book_id}`, req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      res.status(400).send(error);
    })
});

// *********************************************************
////////////////////////////////////////////////////////////////
app.get('/orders/borrowed/:id', (req, res) => {
  var uniqueId = req.params.id;
  let url = `${process.env.API_URL}/orders/borrowed/${uniqueId}`;

  axios.get(url)
    .then(list => res.status(200).send(list.data))
    .catch(err => res.send(err).status(404));
});

app.get('/orders/loaned/:id', (req, res) => {
  var uniqueId = req.params.id;

  let url = `${process.env.API_URL}/orders/loaned/${uniqueId}`;
  axios.get(url)
    .then(list => res.status(200).send(list.data))
    .catch(err => res.send(err).status(404));
});

app.get('/orders/pending/:id', (req, res) => {
  var uniqueId = req.params.id;
  let url = `${process.env.API_URL}/orders/pending/${uniqueId}`;
  axios.get(url)
    .then(list => res.status(200).send(list.data))
    .catch(err => res.send(err).status(404));
});

app.patch('/pending/loan', (req, res) => {
  let url = `${process.env.API_URL}/pending/loan`;
  let user = req.body.user_id;
  let book = req.body.book_id;
  axios.patch(url, req.body)
  .then(pass => res.sendStatus(200))
  .catch(err => res.send(err).status(500))
});

app.patch('/pending/borrow', (req, res) => {
  let url = `${process.env.API_URL}/pending/borrow`;
  let user = req.body.user_id;
  let book = req.body.book_id;
  axios.patch(url, req.body)
  .then(pass => res.sendStatus(200))
  .catch(err => res.send(err).status(500))
});

app.post('/borrow', (req, res) => {
  let url = `${process.env.API_URL}/borrow`;
  axios.post(url, req.body)
  .then(result => res.send(result.data).status(201))
  .catch(err => res.send(err).status(500))
})
////////////////////////////////////////////////////////////////////////////////

// Authorization
// For the homepage
const checkSessionUUID = (uuid) => {
  axios.get(`${process.env.API_URL}/sessions`, { params: { hash: uuid } })
    .then(data => {
      if (data[0]) { // session exist for a user
        return true;
      } else { // session does not exist for a user
        return false;
      }
    })
};

app.get(`/getHash`, (req, res) => {
  axios.get(`${process.env.API_URL}/getHash`)
    .then((data) => res.status(200).send(data.data))
    .catch((err) => res.status(500).send(err));
});

app.get(`/email`, (req, res) => {
  axios.get(`${process.env.API_URL}/email`, { params: req.query })
    .then((data) => res.status(200).send(data.data))
    .catch((err) => res.status(500).send(err));
});

app.get('/sessions', (req, res) => {
  axios.get(`${process.env.API_URL}/sessions`, { params: req.query })
    .then((data) => {
      res.status(200).send(data.data)
    })
    .catch((err) => res.status(500).send(err));
})

app.delete('/sessions', (req, res) => {
  axios.delete(`${process.env.API_URL}/sessions`, { data: req.body })
    .then((data) => res.status(200).send(data.data))
    .catch((err) => res.status(500).send(err));
})

app.put(`/updateSession`, (req, res) => {
  var uuid;
  while (true) { // check database to see if uuid exist
    uuid = uuidv4();
    var sessionExist = checkSessionUUID(uuid);
    if (!sessionExist) {
      break;
    }
  }
  const sendInfo = {
    ...req.body,
    hash: uuid,
  };
  axios.put(`${process.env.API_URL}/updateSession`, sendInfo)
    .then((data) => {
      data.data[0].hash = uuid;
      res.status(200).send(data.data)
    })
    .catch((err) => res.status(500).send(err));
});

app.post(`/newUser`, (req, res) => {
  var uuid;
  while (true) { // check database to see if uuid exist
    uuid = uuidv4();
    var sessionExist = checkSessionUUID(uuid);
    if (!sessionExist) {
      break;
    }
  }
  const sendInfo = {
    ...req.body,
    hash: uuid,
  };
  axios.post(`${process.env.API_URL}/newUser`, sendInfo)
    .then((data) => {
      res.status(201).send(sendInfo)
    })
    .catch((err) => res.status(501).send(err));
});

app.get(`/username`, (req, res) => {
  axios.get(`${process.env.API_URL}/username`, { params: req.query })
    .then((data) => res.status(200).send(data.data))
    .catch((err) => res.status(500).send(err));
});

// LIBRARY ROUTES
app.get(`/:user/library`, (req, res) => {
  axios.get(`${process.env.API_URL}/${req.params.user}/library`)
    .then((data) => res.status(200).send(data.data))
    .catch((err) => res.status(500).send(err));
});

app.post(`/:user/library`, (req, res) => {
  axios.post(`${process.env.API_URL}/${req.params.user}/library`, req.body,
    { headers: { 'Content-Type': 'application/json' } })
    .then(() => res.status(200).send())
    .catch((err) => res.status(500).send(err));
});

app.get(`/:user/borrowed`, (req, res) => {
  axios.get(`${process.env.API_URL}/${req.params.user}/borrowed`)
    .then((data) => res.status(200).send(data.data))
    .catch((err) => res.status(500).send(err));
});

app.get(`/:user/lent`, (req, res) => {
  axios.get(`${process.env.API_URL}/${req.params.user}/lent`)
    .then((data) => res.status(200).send(data.data))
    .catch((err) => res.status(500).send(err));
});

// USAGE RECORDS ROUTE
app.post(`/usage`, (req, res) => {

  const records = {
    isbn: req.body.isbn,
    genre: req.body.genre,
    age: req.body.age,
    gender: req.body.gender,
    date: new Date()
  }

  axios.post(`${process.env.API_URL}/usage/records`, records)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('ERROR posting record', err);
      res.sendStatus(500);
    })
})

// server listens on designated port
app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`)
});
