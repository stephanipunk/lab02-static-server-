// http 
var http = require("http");
var fs = require('fs');
var config = require("./config/config.js");
var colors = require("colors");
var staticServer = require("./internals/static-server");
var handlers = require("./internals/handlers");
// obteniendo las configuraciones  
// del mmodulo de configuracion 
var PORT = config.PORT;
var IP = config.IP;
if(IP =='127.0.0.1'){
    console.log(">--- ejecutando en modo local----<");
}
// Crear un servidor basico 
var server = http.createServer(function(req,res){
// obter la url del archivo 
    var url = req.url;
    console.log(`> url solicitada: ${url}...`.yellow);
    if(url == "/"){
    //sirve el  index 
    url = "/index.html";
}
// verificando que la peticion del cliente sea una ruta virtual 
if(typeo(handlers[url]) === 'function'){
    // si entro aqui,significa que existe un manejador para la url 
    // que se esta solicitando por lo tanto la ejecuto 
    handlers[url](req, res)
}else{
    console.log(`>URL salicitada: ${url}... `.yellow);
    //sirvo la url con mi server statico
    staticServer.server(url, res),
}
});  
// sirvo la url con mi servidor statico 

//poner a trabajar al server  
server.listen(PORT,IP,function(){
    console.log(`> Server listening @http://${IP}:${PORT}...`);
});