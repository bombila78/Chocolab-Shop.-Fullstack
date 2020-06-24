const { Router } = require('express')
const router = Router()
const db = require('../models')

router.get("/all", async (req, res) => {
    console.log("Got signal")
    try {
        const categories = await db.Category.findAll({
            include: {
                model: db.Good
            }
        })

        res.status(200).json(categories);

    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server Error'
        })
    }
})


router.post('/', async (req, res) => {

    try {
        const {title} = req.body;

        const category = await db.Category.create({ title });

        res.status(201).json(category);

    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server Error'
        })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const category = await db.Category.findByPk(+req.params.id);

        await category.destroy();

        res.status(204).json({});

    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server Error'
        })
    }
})

module.exports = router