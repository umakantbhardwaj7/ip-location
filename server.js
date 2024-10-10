const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to handle JSON requests
app.use(express.json());

app.get('/', (req, res) => {
    // Get the user's IP address
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    res.send(`Your IP Address: ${ip}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
