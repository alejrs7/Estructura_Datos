function potencia (base, exp) {
    // Caso base: cualquier número elevado a 0 es 1
    if (exp === 0) return 1;

    // Caso recursivo par: (base^(exp/2))^2
    if (exp % 2 === 0) {
        const mitad = potencia(base, exp / 2);
        return mitad * mitad;
    }

    // Caso recursivo impar: base * (base^((exp-1)/2))^2
    const mitad = potencia(base, (exp - 1) / 2);
    return base * mitad * mitad;
}

// Pruebas
console.assert(potencia(2, 10) === 1024);
console.assert(potencia(5, 3) === 125);
console.assert(potencia(7, 0) === 1);