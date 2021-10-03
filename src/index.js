const express = require('express');
const path = require('path');
const morgan = require('morgan');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/img/uploads'),
  filename: (req, file, cb, filename) => {
    cb(null, uuidv4() + path.extname(file.originalname));
  }
});
app.use(
  multer({
    storage: storage
  }).single('image')
);

// Global variables

// Routes
app.use(require('./routes/index'));

// Static files

// Start the server
app.listen(app.set('port'), () => {
  console.log(`Server on port ${app.set('port')}`);
});