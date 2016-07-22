function getFortuneFromServer(){
    //realizandola solicitud get en ajax 
    $.get("/getfortune", function(data, status){
        console.log(">" + typeof(data));
        console.log(">estatus de respuesta:" + status);
       //alert(data.mensaje);
        swal({
        title: "¡Tu fortuna!",
        text: data.mensaje,
        imageUrl: "img/gl.jpg" 
       });
    });
}