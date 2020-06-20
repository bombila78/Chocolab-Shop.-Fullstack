const { Router } = require('express');
const router = Router();
const Good = require('../models/goods');
const Order = require('../models/orders')


router.get('/', async (req, res) => {

    try {
        const goods = await Good.findAll({raw:true});
        res.status(200).json(goods)
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server Error'
        })
    }
    
})

router.get('/orders/', async (req, res) => {
    try {
        const orders = await Order.findAll({raw:true});
        res.status(200).json(orders)
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server Error'
        })
    }
})

router.post('/add', async (req, res) => {

    try {
        const { name, info, kind, price, imageURL } = req.body;

        const good = await Good.create({
            name: name,
            info: info,
            kind: kind,
            price: price,
            imageURL: imageURL
        })

        res.status(201).json(good);

    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server Error'
        })
    }

})

router.post('/order', async (req, res) => {
    try {
        const {cartItems, name, phone} = req.body;
        const orderItems = cartItems.map(i => {
            return `name: ${i.name} count: ${i.count}`   
        })
        const total = cartItems.reduce((x, y) => {
            return x + y.total
        }, 0)
        console.log(name, phone)
        const order = await Order.create({
            goods: orderItems.join(),
            total,
            clientName: name,
            clientPhone: phone
        })

        res.status(201).json(order);

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Server Error'
        })
    }
})

router.delete('/goods/:id', async (req, res) => {
    try {
        const good = await Good.findByPk(+req.params.id);

        await good.destroy();

        res.status(204).json({})
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server Error'
        })
    }
})

router.delete('/orders/:id', async (req, res) => {
    try {
        const order = await Order.findByPk(+req.params.id);

        await order.destroy();

        res.status(204).json({})
        
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server Error'
        })
    }
})

module.exports = router;
