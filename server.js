const express = require('express');
const path = require('path');
const app = express();
const conf = {
    port: 5000
}
app.use('/v2', express.static(path.join(__dirname, 'build')))
app.get('/v2/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(conf.port, () => {
    console.log(`app running in port :${conf.port} do great things.. :)`)
});
