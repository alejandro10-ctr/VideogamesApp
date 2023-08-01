
const { Router } = require('express');


const router = Router();


const videogamesRouter = require('./videogames');
const genreRouter = require('./genre');



router.use('/', videogamesRouter);
router.use('/genre', genreRouter);





module.exports = router;