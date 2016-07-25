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
    "/getfortune": function(req, res){
        console.log("> Se solicita fortuna...");
        // // Se obtiene el mensaje de la suerte
        // var fortunePaper = {
        //     "mensaje" : 
        //     "La honestidad es un regalo caro, no lo esperes de gente barata"
        // };
        // // Parseando a string el objetoRespuesta
        // // de respuesta
        // var jsonResponse = JSON.stringify(fortunePaper);
        fortune.getFortune(function(fortunePaper){
            // Se configura el encabezado de respuesta
            // HTTP
            res.writeHead(200,{
                "Content-Type" : "application/json"
            });
            console.log("contestando: " + fortunePaper);
            // Respondemos el Objeto
            res.end(fortunePaper);
        });
    }
};