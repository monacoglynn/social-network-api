const {
    connect,
    connection
} = require('mongoose');

const PORT = process.env.MONGODB_URI || 'mongodb:localhost/dummySocialDB'
connect(PORT, {
    useNewUrlParser: true,
    userUnifiedTopology: true
});

module.exports = connection;