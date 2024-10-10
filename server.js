const express = require('express');
const app = express();
const PORT = process.env.PORT || 4005;

app.use(express.static('public')); // Serve your HTML file from the 'public' folder

app.get('/get-ip', (req, res) => {
    const ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress; // Get user's IP address
    res.send(ip); // Send the IP address as a response
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
