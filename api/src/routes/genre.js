
const { Router } = require('express');


const router = Router()

const { getGenre } = require('../controllers/genre')




router.get('/genre' , getGenre)




module.exports = router