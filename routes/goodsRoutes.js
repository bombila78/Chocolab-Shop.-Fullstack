const {Router} = require('express');
const router = Router();
const db = require('../models');


router.get('/all', async (req, res) => {

    try {

        const page = req.query.page;
        const limit = req.query.limit;
    
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
    
        const goods = await db.Good.findAll();
    
        const result = goods.slice(startIndex, endIndex);
        const total = await db.Good.count();
    
        res.setHeader('total', total);
    
        res.status(200).json(result);

    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server Error'
        })
    }

})

router.get('/:id', async (req, res) => {

    try {
        const good = await db.Good.findByPk(+req.params.id);

        res.status(200).json(good);
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server Error'
        })
    }
})

router.post('/', async (req, res) => {
    
    try {
        const { name, info, category, price, imageURL } = req.body;

        const CategoryId = await db.Category
        .findOne({where: {title: category}})
        .then(category => {
            return category.id
        })

        const good = await db.Good.create({
            name,
            info,
            CategoryId,
            price,
            imageURL
        })

        res.status(201).json(good);

    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server Error'
        })
    }
})

router.delete('/:id', async (req, res) => {

    try {
        const good = await db.Good.findByPk(+req.params.id);
        const categoryId = good.CategoryId;

        await good.destroy();

        res.status(200).json(categoryId)
        
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server Error'
        })
    }
})


module.exports = router;
