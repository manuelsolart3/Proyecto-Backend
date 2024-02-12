const mongoose = require('mongoose');

const URI = 'mongodb://127.0.0.1/mern-tasks';

mongoose.connect(URI, {
    useNewUrlParser: true, useUnifiedTopology: true 
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));

module.exports = mongoose;