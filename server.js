const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to handle JSON requests
app.use(express.json());

app.get('/get-ip', (req, res) => {
    // Check the x-forwarded-for header to get the real client IP
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    res.send(`Your IP Address: ${ip}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
