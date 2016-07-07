// http 
var http = require("http");
var fs = require('fs')
//obteniendo  informacion del entorno de ejecucion con respecto al ip y al puerto que 
//que debemos usar en nuestro server 
var PORT = process.env.PORT || 3000;
var IP = process.env.IP || '127.0.0.1';
if(IP=='127.0.0.1'){
    console.log(">--- ejecutando en modo local----<")
}
// Crear un servidor basico 
var server = http.createServer(function(req,res){
    // armar la respuesta http
    //armar un encabezado http
res.writeHead(200,{
    "Content-Type" :"text/html",
    "Server" : "ITGAM@4.2.4"
 });
 //lectura del archivo archivo a servir 
 fs.readFile('./static/index.html','utf8',function(err,content) {
     if(err){
         res.end('<h1>ERROR DE LECTURA </h1>');
     }else{
         res.end(content);
     }
  });
});
//poner a trabajar al server 
server.listen(PORT,IP,function(){
    console.log(`> Server listening @http://${IP}:${PORT}...`);
});