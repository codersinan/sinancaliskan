const express = require('express');

const app = express();
const path = '/dist/website';
app.use(express.static('.' + path));

app.get('/*', (req, res) => {
    res.sendFile('index.html', { root: path + '/' })
});

app.listen(process.env.PORT || 8080);