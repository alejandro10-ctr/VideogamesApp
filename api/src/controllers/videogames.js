
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const { Videogame, Genero } = require("../db")
const { API } = process.env;

const { getAllVideogames } = require('./controllers')

const AllVideogames = async  ( req, res ) => {
    const name = req.query.name;
   try {
    let videogamesTotal = await getAllVideogames();
    
    if(name){
        let videogameName =  videogamesTotal.filter( el => el.name.toLowerCase().includes(name.toLowerCase()))
        videogameName.length ? 
        res.status(200).send(videogameName) :
        res.status(404).send('Videogame not found');
    }else{
        res.status(200).send(videogamesTotal)
    }}catch(error){
        console.log(error)
    }
 };

/* 
const dbVideogames = async (req, res) => {
    try {
        const response = await axios.get(`https://api.rawg.io/api/games?key=${API}`)
        const datosApi = response.data;

        await Videogame.bulkCreate(datosApi.results);
        console.log(datosApi.results)
        res.send('Datos cargados correctamente en la base de datos');

    }catch (error) {
        console.error('Error al cargar datos desde la API:', error);
        res.status(500).send('Error al cargar datos desde la API')
    }
 };
 */

const ById = async ( req, res ) => {

        const id = req.params.id; 
        const ID = id.slice(4)
        //console.log('ID' ,ID)
        
        const videogamesTotal = await getAllVideogames()
        try { 
            if (id){    
                const videogameId =  videogamesTotal.filter( el => el.id == ID )
           
                videogameId ?
                res.status(200).send(videogameId) :
                res.status(404).send('Videogame not found') 
            }}catch(error){
            console.log(error)
        }
        
        
    
};
 
 const ByName = async (req, res) => {
  try{ 
    const  name  = req.query.name;
    const queryMatch = "".includes(name)
    console.log(name)

    const videogameName = await Videogame.findAll({
        where : {
            name: {[Op.iLike]: `${queryMatch}` }
        },
        include: Genero,
    });

    res.json(videogameName)
  }catch(error){
    console.log(error, "ERROR en el Back ByName!!!")
  }
/*     const { name } = req.query;
    const allVid = await getAllVideogames();
    

    try{
        
        if(!name){
            const allV = await Videogame.findAll({    
                include: Genero,
            })
            res.send(allVid.concat(allV))
        } else {
        const queryApiMatch = allVid.filter(el => el.name.toLowerCase == name.toLowerCase());
        const queryDbMatch = await Videogame.findAll({
            where : {
                name : {
                    [ Op.iLike ] : `%${ name }%`
                },
            },
            include : Genero
        });
        const queryMatch = queryApiMatch + queryDbMatch;

        if ( !queryMatch[0] ){
            return res.status(404).json({error: "Videogame not found"})
        }
        console.log(queryMatch)
        return res.status(200).send(queryMatch)
    } 
  }catch(error){
    console.log(error, "Error en Videogames")
  }
 */

};
 



const createVideogame = async ( req, res ) => {

try {    
    let{
        name,
        description,
        released,
        rating,
        image,
        platforms,
        genres,
       

    } = req.body;

    

    let videogameCreated = await Videogame.create ({
        name,
        description,
        released,
        rating,
        image,
        platforms,
        
    })
    
    let genresDb = await Genero.findAll({
        where: { name: genres}
    })
    videogameCreated.addGenre(genresDb)
    res.send('Videogame successfully created')
}catch(error){
    console.log(error)
}
};




module.exports = {
    AllVideogames,
   // dbVideogames,
    ByName,
    ById,
    createVideogame
}