/*
  Aplicación      : web-server 
  Módulo          : Archivo para definir la ruta del inicio de la página que se muestra en el web-server
  Fecha creación  : 20 de Mar del 2024
  Modificado el   : 21 de Mar del 2024
  Programador     : JLRAMIREZ
  Colaboración    :
  Descripción     :
*/

import express from 'express'
//const express = require('express')

import path from 'path'
//const path = require('path')


export const startServer = (options) => {
   const {port, public_path = 'public'} = options   
   const app = express()

   app.use(express.static(public_path))

   app.get('*', (req, res) =>{
      const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
      res.sendFile(indexPath)
   })

   app.listen(port, () => {
      console.log(`escuchando en el puerto ${port}`)
   })
}

/* module.exports = {
   startServer
} */