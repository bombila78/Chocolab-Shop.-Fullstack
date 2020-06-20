const {Router} = require('express')
const router = Router()
const db = require('../models')

router.get("/all", async (req, res) => {

    const page = req.query.page
    const limit = req.query.limit

    const offset = (page - 1) * limit
    // const endIndex  = page * limit

    const categories = await db.Category.findAll({
        include: [
            {
                model: db.Good,
                offset: offset,
                limit: parseInt(limit),
            },
        ]
    }).catch(error => {
        res.status(400).json({
            message: error.message
        })
    })

    res.status(200).json(categories)

})

module.exports = router