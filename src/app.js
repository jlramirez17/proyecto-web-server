
const {envs} = require('./config/env')
const {startServer} = require('./server/server')

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



