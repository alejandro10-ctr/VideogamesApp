//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 const server = require('./src/app.js');
const { conn } = require('./src/db.js');
/* const { Videogame } = require('./src/models/Videogame.js')
const { Genero } = require('./src/models/Genero.js') */



// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
 

/* 
const express = require('express');
const cors = require('cors');

const app = express();

// Configurar CORS para permitir solicitudes desde localhost:3000
app.use(cors({
  origin: 'http://localhost:3000',
}));

// Resto de la configuración y rutas de tu aplicación

// Iniciar el servidor
app.listen(3001, () => {
  console.log('Servidor backend en ejecución en http://localhost:3001');
});
 */