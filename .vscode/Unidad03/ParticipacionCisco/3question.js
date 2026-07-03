// 2.1.11 SECTION PRACTICE
// Question 3: Cadena de conversiones desde "1234"
// String -> Number -> BigInt -> Boolean

let b = Boolean(BigInt(Number("1234")));
console.log(`${b} [${typeof b}]`);

// Version equivalente paso a paso (misma logica):
// let s = "1234";
// let n = Number(s);
// let bi = BigInt(n);
// let b2 = Boolean(bi);
// console.log(`${b2} [${typeof b2}]`);

// Respuesta: SI es posible. Cualquier BigInt distinto de 0n se convierte en true.