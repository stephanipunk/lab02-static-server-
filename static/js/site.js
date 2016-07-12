var color = "honeydew"
function hola(){
    alert("Bienvenido a esta pagina ...");
}

function changeBkgColor(){
    var color = document.body.style.backgroundColor;
    console.log("");
    if (color == "lightseagreen"){
        color = " honeydew";
}else{
    color = "lightseagreen";
}
console.log("> cambiando color a" + color);
document.body.style.backgroundColor = color;
}