//cargando el driver de mongdb que me permitira conectarme a la bd 
var mongo = require('mongodb');
//cargo al cliente d dirver 
var mongoCilent = mongo.MongoClient;


//var fortunePaper = {
  //  "mensaje": "La honestidad es un regalo caro, no lo esperes de gente barata"
//};
module.exports = {
    "getFortune": function (cb) {
        //conectando al cliente a la base de datos fortune
        mongoCilent.connect("mongo://127.0.0.1/fortune", 
        function(erro, db) {
            if(err){
                console.log("error al conectarse a la base de datos mongo://127.0.0.1/fortune");
                var fortunePaper = {
               "mensaje": "La honestidad es un regalo caro, no lo esperes de gente barata"
          };
          //convirtiendo el fortune en objeto a su vercion de string
           var fortunePaperResponse = JSON.stringify(fortunePaper);
        //ejecuto el callback (cb) pasandole
        //como parametro el fotunepaper stringify
        cb(fortunePaperResponse);
            }else{
                //obtengo la colleccion con lo que quiero trabar 
                var papersCollection = db.collection('papers');
                //consulto todos los documentos de mi coleccion
                var objetoResultado = papersCollection.find({});
                //parseo el objeto resultado en un arreglo 
                objetoResultado.toArray(function(err, papers) {
                var fortunePaperResponse = JSON.stringify(papers[0]);
                //cerrar la conexion entre el cliente y la base de datos 
                db.close()
                // invoco aal cb pasandole como parametro la respuesta 
                cb(fortunePaperResponse);
                })
            }
        });
       
    }
};