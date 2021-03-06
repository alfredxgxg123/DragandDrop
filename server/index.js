const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
// const controller = require('./controller.js');

const app = express();
const port = 8000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../client/dist')));
// app.get('/api/get', controller.avatar.get);

app.listen(port, () => console.log(`listening on port ${port}!`));
