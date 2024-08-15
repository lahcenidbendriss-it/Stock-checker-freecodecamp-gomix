const mongoose = require('mongoose');

const dbUri = process.env.DB;

if (!dbUri) {
  throw new Error('No database URI found in environment variables.');
}

mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true,
  tlsAllowInvalidCertificates: false
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

module.exports = mongoose;
