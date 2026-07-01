function busquedaBinaria(arr, target, left, right) {
    if (izquierda > derecha) return -1;
    let medio = Math.floor((izquierda + derecha) / 2);
    if (arr[medio] === objetivo) return medio;
    else if (arr[medio] > objetivo) return busquedaBinaria(arr, objetivo, izquierda, medio - 1);
    else return busquedaBinaria(arr, objetivo, medio + 1, derecha);
}

let numeros = [10, 20, 30, 40, 50, 60, 70];
let objetivo = 40;
let indice = busquedaBinaria(numeros, objetivo, 0, numeros.length - 1);

if (indice !== -1) {
    console.log("Sección 2.2: Búsqueda binaria superada.");
    console.log("El número " + objetivo + " se encuentra en el índice " + indice);
} else {
    console.error("Error en búsqueda binaria");
}