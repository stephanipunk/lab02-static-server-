var fortunePaper = {
    "mensaje": "La honestidad es un regalo caro, no lo esperes de gente barata"
};
module.exports = {
    "getFortune": function (cb) {
        var fortunePaper = JSON.stringify(fortunePaper);
        //ejecuto el callback (cb) pasandole
        //como parametro el fotunepaper stringify
        cb(fortunePaper);
    }
};