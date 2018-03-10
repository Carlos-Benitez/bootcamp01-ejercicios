//condicion si - if
var x=8;
var y=8;
if(x>y){
  console.log("x es mayor a y");
}else if (x==y) {
  console.log("x es igual a y");
}
else {
  console.log("x es menor a y");
}

// switch
var dia = new Date().getDay();
switch (dia) {
  case 1:

    break;
  case 6:
    console.log("Hoy es sábado");
    break;
  default:
    console.log("No es ninguno de los anteriores");
}

//
