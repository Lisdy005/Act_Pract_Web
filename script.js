// 1. Área de un círculo
console.log("1. Área de un círculo");
const radio = 5;
const area_circulo = Math.PI * radio ** 2;
console.log(`El área del círculo de radio ${radio} es ${area_circulo}`);

// 2. Array de estudiantes recorrido con for...of
console.log("2. Saludo a cada estudiante");
const estudiantes = ["Laura", "Luis", "María"];
for (const estudiante of estudiantes) {
  console.log(`Hola, ${estudiante}`);
}

// 3. Cuenta regresiva con while
console.log("3. Cuenta regresiva desde 5");
let contador = 5;
while (contador > 0) {
  console.log(contador);
  contador--;
}

// 4. Comparación estricta
console.log("4. Comparación estricta");
console.log('5 === "5":', 5 === "5"); // false: compara valor y tipo
// Con == daría true porque convertiría el string "5" en número antes de comparar y los vería iguales

// 5. Par o impar
console.log("5. Par o impar");
const par_o_impar = (numero) => (numero % 2 === 0 ? "par" : "impar");
console.log("El 7 es", par_o_impar(7)); // impar
console.log("El 10 es", par_o_impar(10)); // par