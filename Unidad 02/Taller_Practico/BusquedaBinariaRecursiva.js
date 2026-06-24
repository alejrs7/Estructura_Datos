function invertArrangement(arr, start, end) {
    // CASO BASE: Si el índice de inicio cruza o iguala al de fin,
    // significa que ya llegamos al centro del arreglo. Detiene la recursión.
    if (inicio >= fin) return;

    // CASO RECURSIVO: Intercambia los elementos de los extremos actuales
    let aux = arr[inicio];
    arr[inicio] = arr[fin];
    arr[fin] = aux;

    // Invoca la recursividad acercando los punteros hacia el centro
    invertirArreglo(arr, inicio + 1, fin - 1);
}

// Prueba de validación Ejercicio 2.1
let miLista = [10, 20, 30, 40, 50];
invertirArreglo(miLista, 0, miLista.length - 1);
console.assert(JSON.stringify(miLista) === JSON.stringify([50, 40, 30, 20, 10]), "Error en Ejercicio 2.1");
console.log("Sección 2.1: Inversión de arreglo superado.");