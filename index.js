const express = require('express');
const path = require('path');
const sequelize = require('./utils/database');
const Routes = require('./routes/routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.json());
app.use('/api/chocolab', Routes)

app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
});



async function start() {
    try {
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`App is running on PORT - ${PORT}`)
        })
    } catch(e) {
        console.log(e)
    }
}

start();