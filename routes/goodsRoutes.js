const {Router} = require('express')
const router = Router()
const db = require('../models')

router.get('/all', async (req, res) => {

    const page = req.query.page
    const limit = req.query.limit

    const startIndex = (page - 1) * limit
    const endIndex  = page * limit

    const goods = await db.Good.findAll()

    const result = goods.slice(startIndex, endIndex)
    const total = await db.Good.count()

    res.setHeader('total', total)

    res.status(200).json(result)

})

module.exports = router