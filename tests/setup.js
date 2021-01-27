jest.setTimeout(7000);

require('../models/User')

const mongoose = require('mongoose');
const keys = require('../config/keys');

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
