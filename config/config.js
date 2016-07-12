//leyendo archivo de configuracion
var fs = require("fs");
var path =  require('path');
var objconfig =
JSON.parse(
    fs.readFileSync("./config/config.json","UTF-8")
);
objconfig.IP = process.env.IP || objconfig.IP;
objconfig.PORT =process.env.PORT || objconfig.PORT;
objconfig.STATIC_PATH = path.resolve(objconfig.STATIC_PATH);
console.log("STATIC_PATH" + objconfig.STATIC_PATH);
module.exports = objconfig; 
