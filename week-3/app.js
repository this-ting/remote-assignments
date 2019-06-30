const express = require('express');
const app = express();

// sends Hello message when launched
app.get('/', (request, response) => {
    response.send('Hello my server!');
});

app.listen(3000);