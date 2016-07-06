// http 
var http = require("http");
// Crear un servidor basico 
var server = http.createServer(function(req,res){
    // armar la respuesta http
    //armar un encabezado http
res.writeHead(200,{
    "Content-Type" :"text/plain",
    "Server" : "ITGAM@4.2.4"
 });
 // enviamos la respuesta 
 res.write("hola mundo");
 //cerrar la coneccion 
 res.end();
});
//poner a trabajar al server 
server.listen(300,'127.0.0.1',function(){
    console.log("> Server listening @http://localhost:300...");
});