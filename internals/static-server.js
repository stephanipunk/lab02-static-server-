// cargar los modulos necesarios 
// para crear mi servidor estatico 
var fs = require ('fs'), 
    config = require('../config/config.js'),
    mimen = require('mime');
    // exportar la funcion de servidor statico 
    exports.server = function (url, res){
        //acompletar el path 
        var filePath = config.STATIC_PATH + url;
        //verificando si esxite o no el archivo dentro del servidor 
        fs.exists(filePath, function(exists){
            if(exists){
                // sirvo el archivo
                fs.readFile(filePath, function(err, content){
                    if(err){
                        console.log(`>hubo erro en la lectura del archivo : ${filePath}`);
                        //enviar error 500
                        res.writeHead(500,{
                        'Content-Type' : 'text/html',
                        'Server': 'pilgrimHawk@2.1.2' 
                        });
                        res.end("<h1>error 500: recurso dañado</h1>");
                    }else{
                        //configuramos la respuesta 
                        var contentType = mime.lookup(filePath);
                    //armamos respuesta 
                    res.writeHead(200,{
                        'Content-Type': contentType,
                        'server':'pilgrimHawk@2.1.2' 
                    });
                    //enviar el archivo 
                    res.end(content);
                    }
                }); 
            }else{
                // mando un mensaje 404 
                 res.writeHead(404,{
                        'Content-Type' : 'text/html',
                        'Server': 'pilgrimHawk@2.1.2' 
                 });
                 res.end("<h1>error 404: recurso no encontrado</h1>"); 
            }
        }); 
    };   