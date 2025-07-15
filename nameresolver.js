/**
 * @author Vishal Sanghani
 * Date: 18/02/23
 */
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({
    path: './config.env'
});

const database = process.env.DATABASE;
mongoose.connect(database);

const app = require('./app');


// Start the server
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
});

