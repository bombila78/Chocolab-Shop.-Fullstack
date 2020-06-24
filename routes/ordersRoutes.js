const {Router} = require('express');
const router = Router();
const db = require('../models');

router.get('/all', async (req, res) => {

    try {

        const orders = await db.Order.findAll();

        res.status(200).json(orders);

    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server Error'
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const {cartItems, name, phone} = req.body;
        const orderItems = cartItems.map(i => {
            return `Товар: ${i.name} Кол-во: ${i.count}`   
        })
        const total = cartItems.reduce((x, y) => {
            return x + y.total
        }, 0)

        const order = await db.Order.create({
            goods: orderItems.join(),
            total,
            clientName: name,
            clientPhone: phone
        })

        res.status(201).json(order);

    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server Error'
        })
    }
})

router.delete('/:id', async (req, res) => {

    try {
        const order = await db.Order.findByPk(+req.params.id);

        await order.destroy();
    
        res.status(204).json({});
        
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server Error'
        })
    }
})

module.exports = router