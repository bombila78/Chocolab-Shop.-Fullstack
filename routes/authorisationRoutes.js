const { Router } = require('express');
const router = Router();
const bcrypt = require('bcryptjs')
const db = require('../models');

router.post('/', async (req, res) => {

    try {
        const {username, password} = req.body;
        
        const candidate = await db.User.findOne({where: {username: username}})
        .then(user => {
            if (user === null) {
                const notValidName = false
                res.status(200).json(notValidName)
                return;
            }
            const {username, password} = user;
            return {
                username,
                password
            }
        })
        if (candidate) {
            
            const areSame = await bcrypt.compare(password, candidate.password)
        
            res.status(200).json(areSame)
        } 

    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server Error'
        })
    }
})

module.exports = router;