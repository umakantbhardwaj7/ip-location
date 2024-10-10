const express = require('express');
const app = express();

// Route for the root path
app.get('/', (req, res) => {
    res.send('Welcome to the IP Address Fetcher! Go to /get-ip to see your IP address.');
});

// Route to get the user's IP address
app.get('/get-ip', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    res.send(`Your IP Address: ${ip}`);
});

const port = 3002; // You can keep this port or change it

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
