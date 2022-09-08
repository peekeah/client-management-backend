const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const articleRouter = require('./routes/article');

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

const URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

app.use('/', async (req, res, next) => {
    next();
})

app.get('/', async (req, res) => {
    res.send('Client management App');
})

app.use('/articles', articleRouter);

mongoose.connect(URL, () => {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
})