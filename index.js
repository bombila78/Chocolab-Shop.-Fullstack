const express = require('express');
const path = require('path');
const db = require('./models')


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.json());



app.use('/api/categories', require('./routes/categoriesRoutes'))
app.use('/api/goods', require('./routes/goodsRoutes'))
app.use('/api/orders', require('./routes/ordersRoutes'))
app.use('/api/auth', require('./routes/authorisationRoutes'))

app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

// const generateLoremData = async (index) => {

//     const category = await db.Category.create({
//         title: "Category " + index
//     })

//     for (let i = 10; i > 0; i--) {

//         const good = await db.Good.create({
//             name: "Good chocolate " + index,
//             info: "Lorem ipsum dolor sit amet! " + index,
//             price: 3987,
//             imageURL: "image" + index + ".jpg",
//             CategoryId: category.id
//         })

//         console.log(`----------- Good ${good.name} created -----------`)

//     }

//     console.log(`----------- Category ${category.title} created -----------`)

// }

db.sequelize.sync({alter: true}).then(() => {

    // for (let i = 1; i < 6; i++) {
    //     generateLoremData(getRandomInt(50, 1000))
    // }

    app.listen(PORT, () => {

        console.log(`Chocolab-shop server running at port ${PORT}`)

    })
})