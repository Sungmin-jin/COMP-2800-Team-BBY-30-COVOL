const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

//connect DB
connectDB();

// Init Middleware
app.use(
  express.json({
    extended: false,
  })
);

//Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

<<<<<<< HEAD
/*
deploy mern application through heroku
Found this code on Youtube
author: Esterling Acclime
@see: https://www.youtube.com/watch?v=e1LaekAnVIM&t=738s
*/
=======
>>>>>>> dev
//Server static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

<<<<<<< HEAD
  //send all routes
=======
  // Send all routes
>>>>>>> bd92483ca4dfb580ab6d57f624758908655f6f29
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

<<<<<<< HEAD
//localhost port
=======
//local host port
>>>>>>> bd92483ca4dfb580ab6d57f624758908655f6f29
const PORT = process.env.PORT || 8000;

//run the server
app.listen(PORT, () => {
  console.log(`program running on ${PORT}`);
});
