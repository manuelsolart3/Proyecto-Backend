//WEBPACK  SIRVE PARA  TOMAR EL ARCHIVO INDEX QUE ESTA EN APP Y 
//LO CONVIERTE Y LO PONE EN LA CARPETA PUBLIC

module.exports = {
entry: './src/app/index.js'  ,
output: {
    path: __dirname + '/src/public' , 
    filename: 'bundle.js'
},

//Creamos una propiedad con un objeto para darle unas 
//reglas para que cuando use babel va a testear todos los
// archivos que terminen en punto js o todos los archivos que sea javascript 
module:{
    rules:[
        {
            use: 'babel-loader',
            test: '/\.js$/'  , 
            exclude: /node_modules/ 
        }
    ]
}
};