var dias = [];// Array vacío
var marcarAuto =["Suzuki","Mazda", "Toyota", "Nissan", "Kia"];
console.log(marcarAuto);
console.log(marcarAuto.length);// retorna la cantidad de elementos

//Operaciones con arrays

console.log(marcarAuto[3]);

console.log(marcarAuto.sort());// ordena de forma alfabética
console.log(marcarAuto.sort().reverse());// ordena de forma alfabética inversa

//agregar elementos al array
//agregar al final del array
marcarAuto.push("Ferrari");
console.log(marcarAuto);

//eliminar el último elemento del arrays
marcarAuto.pop();
console.log(marcarAuto);

//eliminar el primer elemento
marcarAuto.shift();
console.log(marcarAuto);

//borrar elemento conociendo el index
delete marcarAuto[0];
