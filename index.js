const express = require('express');
const path = require('path');
const Routes = require('./routes/routes');
const db = require('./models')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.json());
app.use('/api/chocolab', Routes)

app.use('/api/categories', require('./routes/categoriesRoutes'))

app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

const generateLoremData = async (index) => {

    const category = await db.Category.create({
        title: "Category " + index
    })

    for (let i = 10; i > 0; i--) {

        const good = await db.Good.create({
            name: "Good chocolate " + index,
            info: "Lorem ipsum dolor sit amet! " + index,
            price: 3987,
            imageURL: "image" + index + ".jpg",
            CategoryId: category.id
        })

        console.log(`----------- Good ${good.name} created -----------`)

    }

    console.log(`----------- Category ${category.title} created -----------`)

}

db.sequelize.sync({alter: true}).then(() => {

    // for (let i = 1; i < 6; i++) {
    //     generateLoremData(getRandomInt(50, 1000))
    // }

    app.listen(PORT, () => {
        console.log(`Defenders server running at port ${PORT}`)
    })
})