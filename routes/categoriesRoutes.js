const {Router} = require('express')
const router = Router()
const db = require('../models')

router.get("/all", async (req, res) => {

    const categories = await db.Category.findAll()

    res.status(200).json(categories)

})

module.exports = router