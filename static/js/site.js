var color = "lightgoldenrodyellow"
function hola(){
    sweetAlert("world places","Bienvenido a esta pagina ...");

}

function changeBkgColor(){
    var color = document.body.style.backgroundColor;
    console.log("");
    if (color == "lightpink"){
        color = " lightgoldenrodyellow";
}else{
    color = "lightpink";
}
console.log("> cambiando color a" + color);
document.body.style.backgroundColor = color;
}