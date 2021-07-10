
// Codigo para crear un servidor http
// Se agrega despliegue y configuración del puerto a utilizar

// var http = require("http");

// var servidor= http.createServer(function(peticion, respuesta){
    
//     respuesta.writeHead(200, {"Content-type": "text/html"});
//     respuesta.write("Respuesta: Url => "+peticion.url);

//     console.log("Petición web");
// });

// servidor.listen(3000);
// console.log("Ejecutando servidor pueto 3000");



// se hace la instalación del paquete nodemon
// este paquete lo que hace es que cada vez que se grabe un cambio en el archivo se vuelve a ejecutar la aplicacion.
//console.log("Resultado: "+Math.floor(Math.random() * 3000));


// miModulo es un archivo .js creado dentro del mismo directorio de trabajo
// es posible utilizar este tipo de archivos para hacer la aplicación mas modular
// var miModulo = require("./miModulo");
// console.log("Multiplicar: ("+miModulo.multiplicar(5)+")  Dividir: ("+miModulo.dividir(15)+")");


// Es posible importar librerias desde npm
// la convensión para la invocación de librerias es utilizar el mismo nombre de la libreria como nombre de variable
// var moment = require("moment");
// console.log(moment("2000-01-01").format().toString() );


// process.env.colorFavorito="Azul";
// console.log(process.env.colorFavorito);
//process, variable local sobre el entorno donde se esta ejecutando el servicio de node.js
//es posible crear nuevos valores para ser almacenados en el entorno del servicio node


//console.log(Buffer(10));
//Buffer se usa para hacer el manejo de objetos binarios
//para el manejo similar a Byte[], uso para archivos, imagenes, etc

// MANEJO DE CODIGO JAVA SCRIPT EN NODE.JS
// var nombre = "Teodoro";
// nombre = 10;

// var lista = ["Uno", "Dos", "Tres"];

// var listacompuesta = {

//     nombre:"Manuel",
//     apellido:"Ahumada",
//     duplicar: function(valor1){
//         return valor1*2;
//     },
//     dividir: function(valor1){
//         return valor1/2;
//     }
// };

// console.log("---- tarea ejecutada ---- ("+nombre+")("+listacompuesta.apellido+")("+listacompuesta.duplicar(5)+")("+listacompuesta.dividir(30)+")");