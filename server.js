const express = require('express');
const app = express();
const PORT = process.env.PORT || 4005;

app.use(express.static('public'));

app.get('/get-ip', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress;
    const realIp = ip.split(',')[0].trim();
    res.send(realIp);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
