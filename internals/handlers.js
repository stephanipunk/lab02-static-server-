//manejadores de rutas virtuales 
var fechaNacimiento = new Date(1989,10,08,2,45);
module.exports = {
    "/edad/fanny-olivares" : function(req, res) {
        res.writeHead(200,{
            "Content-Type" : "application/json"
        });
        //calculo la edad
        var hoy = new Date();
        var age = Math.ceil((hoy - fechaNacimiento)/1000*3600*24*365);
        // armando el json
        var objetoRespuesta = {
            "edad": age
        };
        var jsonResponse = JSON.stringify(objetoRespuesta);
        //envio la respuesta al cliente
        res.end(jsonResponse);
    }
};