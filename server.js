const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config/database');
const router = require('./router');
const path = require('path');
const passport = require('passport');
require('./config/passport')(passport);

mongoose.connect(config.database);
mongoose.connection.once('open', () => {
	console.log('Connection to database is made');
});
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
router(app);
app.listen(port, () => {
	console.log('listening on port', port);
});