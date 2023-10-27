/* const personas = ["Pablo", "Juan", "Pedro", "Maria", "Lucia"];
console.log(personas[3]);

personas.push ("Alejandro");
console.log(personas.length);
console.log(personas);

const eliminado = personas.pop();
console.log ("Personas despues del POP", personas, eliminado);

personas.unshift("Primer Elemento");
console.log("Personas Unshift", personas);
personas.shift();
console.log("Personas shift", personas);

const numeros=[1,2,3,4,4,5,6,7,8,9,10];
const producto = 5;
const resultado = [];

for (let i=0; i < numeros.length; i++) {
    const operacion = numeros[i] * producto;
    resultado.push(operacion);
}

console.log("Calculadora", numeros,  resultado);

for (let i of numeros){
    resultado.push(i*producto);
}

console.log("Calculadora", numeros,  resultado); */

const personas = [
  {
    name: "Pedro",
    lastname: "Perez",
    age: 21,
  },
  {
    name: "Juan",
    lastname: "Zapata",
    age: 22,
  },
  {
    name: "Maria",
    lastname: "Gonzales",
    age: 25,
  },
];

const filtropersonas=personas.filter((persona) => persona.age >21 && persona.lastname.toLowerCase().includes("t"));
console.log(filtropersonas);


const busqueda = persona.find((persona)=>persona.age >21);

console.log(busqueda);