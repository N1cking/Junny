require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const jobRoutes = require('./routes/jobs');

app.use(cors());
app.use(express.json());

const databaseUrl = process.env.MONGO_URI;

console.log('Database URL:', databaseUrl);

if (!databaseUrl) {
  console.error('MONGO_URI is not defined');
  process.exit(1);
}

mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/jobs', jobRoutes);

app.get('/test', (req, res) => {
  res.send('API is working');
});

app.listen(5001, () => console.log('Server Started on port 5001'));
