const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const articleRouter = require('./routes/article');
const userRouter = require('./routes/user');


dotenv.config();
// app.use(cors());
app.use(express.json());

const URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 5000;

app.use('/', async (req, res, next) => {
    cors();
    next();
})

app.get('/', async (req, res) => {
    res.send('Client management App');
})

app.use('/user', userRouter);
app.use('/articles', articleRouter);

mongoose.connect(URL, () => {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
})