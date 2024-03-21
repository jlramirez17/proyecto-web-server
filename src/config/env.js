/*
  Aplicación      : web-server 
  Módulo          : Archivo que maneja las variables de entorno del web-server
  Fecha creación  : 20 de Mar del 2024
  Modificado el   : 21 de Mar del 2024
  Programador     : JLRAMIREZ
  Colaboración    :
  Descripción     :
*/

import env from 'dotenv'
//const {get} = require('env-var');
import env_var from 'env-var';

env.config();

export const envs = {
   PORT: env_var.get('PORT').required().asPortNumber(),
   PUBLIC_PATH: env_var.get('PUBLIC_PATH').default('public').asString()
}

/* module.exports = {
   envs
}
 */