function sumDigits(n) {
  if (n === 0) return 0;
  return (n % 10) + sumDigits(Math.floor(n / 10));
}

// Pruebas con salida visible
console.log("sumDigits(1243) =", sumDigits(1243)); // 10
console.log("sumDigits(0)    =", sumDigits(0));    // 0
console.log("sumDigits(9)    =", sumDigits(9));    // 9
console.log("sumDigits(10)   =", sumDigits(10));   // 1 (correcto)
console.log("sumDigits(123)  =", sumDigits(123));  // 6