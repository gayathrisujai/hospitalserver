const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));

const hospitalRoutes = require('./Routes/hospitalRoutes');

app.use('/user', hospitalRoutes);

app.listen(4000, () => {
    console.log('Server running on PORT 4000');
});
