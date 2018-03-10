//ciclos
//FOR
for (var i = 0; i < 5; i++) {
  console.log("Ejec.. Nro",i);
}

//
// Formato de json
var persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad:23,
  nombreCompleto: function () {return this.nombre+ " "+this.apellido}
};
//recorrer un json con for in
var txt ="";
var person = {fname:"jhon", lname:"lennon", age:30}
for (var x in person) {
  console.log(person[x]);
  txt+=person[x] + " ";
}
console.log(txt);

//

var posts = [
  {
    titulo:"programación en Js",
    texto: "javaScrip es un lengueje de HTML y la web",
  },
  {
    titulo:"Intro a Linux",
    texto: "javaScrip es un lengueje de HTML y la web",
  },
  {
    titulo:"No usen windows pirata",
    texto: "javaScrip es un lengueje de HTML y la web",
  }]

  posts.map(function(post){
    console.log(post);
    var titulo = post.titulo;
    console.log(titulo);
    var texto = post.texto;
    console.log(texto);
    
  })
