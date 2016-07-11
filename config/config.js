//leyendo archivo de configuracion
var fs = require("fs");
var objconfig =
JSON.parse(
    fs.readFileSync("./config/config.json","UTF-8")
);
objconfig.IP = process.env.IP || objconfig.IP;
objconfig.PORT =process.env.PORT || objconfig.PORT;
module.exports = objconfig; 
