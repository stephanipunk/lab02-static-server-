//manejadores de rutas virtuales 
var fortune = require ("./fortune");
var fechaNacimiento = new Date(1989,10,08,2,45);
module.exports = {
    "/edad/fanny-olivares" : function(req, res) {
        res.writeHead(200,{
            "Content-Type" : "application/json"
        });
        //calculo la edad
        var hoy = new Date();
        var age = Math.ceil((hoy - fechaNacimiento)/(1000*3600*24*365));
        // armando el json
        var objetoRespuesta = {
            "edad": age
        };
        var jsonResponse = JSON.stringify(objetoRespuesta);
        //envio la respuesta al cliente
     res.end(jsonResponse);
   },
   
    //"/getfortune" : function (res,rep){
       // var fotunepaper = {
           // "mensaje" : "La honestidad es un regalo caro, no lo esperes de gente barata"
     };
        fortune.getFortune(function(fortunePaper) {   
 //})
        //se configura el encabezado de la respuesta HTTP
        res.writeHead(200,{
            "Content-Type" : "application/json"
        });
        // Parseando a string el objetoRespuesta de respuesta 
        //var jsonResponse = JSON.stringify(fortunePaper);
        // Respondemos el objeto 
        res.end(jsonResponse);
    }
};