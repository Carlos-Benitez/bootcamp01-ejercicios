
function sumar() {
  var x = 1;
  var y = 2;
  console.log(x+y);
}
sumar();

function restar(x,y) {
  var resultado = x -y;
  console.log(resultado);
}
restar(10,5);

function miFuncion(nombre, apellido) {
  var nombreCompleto = nombre+ " "+apellido;
  return nombreCompleto;

}
//typeof (variable): para saber que tipo de valor devuelve una variable

var nombreCompleto = miFuncion("Carlos", "Benitez")
console.log(nombreCompleto);

//funciones anónimas
var miFuncion = function(){
  return 5+10;
}
console.log(miFuncion());

console.log(function(a,b) {return a-b}(5,1));
