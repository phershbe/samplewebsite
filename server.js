const express = require('express');
const application = express();

const port = process.env.PORT || 8080;

application.get('/', (request, response) => {
    response.send('Hello World');
});

application.listen(port, () => {
    console.log('Application running');
});
