const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

const URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

mongoose.connect(URL, () => {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
})