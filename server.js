// http 
var http = require("http");
var fs = require('fs')
var config = require("./config/config.js");
var staticServer = require("./internals/static-server");
//obteniendo las configuraciones  
//del mmodulo de configuracion 
var PORT = config.PORT;
var IP = config.IP;
if(IP =='127.0.0.1'){
    console.log(">--- ejecutando en modo local----<");
}
// Crear un servidor basico 
var server = http.createServer(function(req,res){
//obter la url del archivo 
    var url = res.url;
// sirvo la url con mi servidor statico 
    staticServer.server(url, res);
});
//poner a trabajar al server 
server.listen(PORT,IP,function(){
    console.log(`> Server listening @http://${IP}:${PORT}...`);
});