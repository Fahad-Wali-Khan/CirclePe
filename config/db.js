const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://fahadkhan8717:fahadkhan8717@cluster0.i8r0p3p.mongodb.net/?retryWrites=true&w=majority/CirclePe', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

module.exports = mongoose.connection;
