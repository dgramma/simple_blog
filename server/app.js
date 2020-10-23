const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

const port = 4000;

const db = require('./db/config');

const posts = require('./routes/posts');

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send("Hello Dave");
});

app.use('/posts', posts);

app.listen(port, () => {
    console.log(`app running on port ${port}`);
});