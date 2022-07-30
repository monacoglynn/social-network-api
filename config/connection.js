const {
    connect,
    connection
} = require('mongoose');

connect('mongodb:localhost/dummySocialDB', {
    useNewUrlParser: true,
    userUnifiedTopology: true
});

module.exports = connection;