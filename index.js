const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    mongoose.connect('mongodb+srv://shareefsk219:shareef@shareef.kb3hiuc.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
});

app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    const numbers = [];
    const alphabets = [];
    let highestLowercaseAlphabet = '';

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else {
            alphabets.push(item);
            if (item >= 'a' && item <= 'z' && item > highestLowercaseAlphabet) {
                highestLowercaseAlphabet = item;
            }
        }
    });

    const response = {
        is_success: true,
        user_id: "SHAREEF_SHAIK_09062003",
        College_email: "shareef.21bce9384@vitapstudent.ac.in",
        College_roll_number: "21BCE9384",
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
    };

    res.json(response);
});


app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});


