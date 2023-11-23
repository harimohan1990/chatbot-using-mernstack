const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/chat', (req, res) => {
    const userMessage = req.body.message;
    const botMessage = `Bot: You said: ${userMessage}`;
    res.json({ botMessage });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
