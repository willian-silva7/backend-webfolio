require('dotenv/config');

const express = require('express');
require('express-async-errors');

const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const AppError = require('./errors/AppError');
const uploadConfig = require('./config/upload');

mongoose.connect(process.env.MONGO_SECRET, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
}); // conectar mongoose

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use((err, request, response, next) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'internal server error',
  });
});

app.listen(3333, () => {
  console.log('  🚀 Server started on port 3333  ');
});
