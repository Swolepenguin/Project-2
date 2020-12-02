const db = require('../models')
const axios = require('axios')
let router = express.router()

router.post('/faves',(req,res)=>{
    db.favorites.create({
        title: req.body.title
    })
})

router.get('/faves',(req,res)=>{
    db.favorites.findAll().then(allFaves =>{
        res.render('/views/faves', {allFaves})
    })
})



module.exports = router