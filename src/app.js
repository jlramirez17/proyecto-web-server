/*
  Aplicación      : web-server 
  Módulo          : Archivo que inicia el web-server
  Fecha creación  : 20 de Mar del 2024
  Modificado el   : 21 de Mar del 2024
  Programador     : JLRAMIREZ
  Colaboración    :
  Descripción     :
*/

//actualizado para usar import la forma actual de hacerlo ES6
/* const {envs} = require('./config/env')
const {startServer} = require('./server/server')
 */

import {envs} from './config/env.js'
import {startServer} from './server/server.js'

//funcion autoconvocada, no tiene nombre, se llama así misma

const main = () => {
   startServer({
      port: envs.PORT,
      public_path: envs.PUBLIC_PATH
   })
}

( async () => {
   main()
})()



