//CONDICIONALES

// 1. Verificar si un número es positivo, negativo o cero
if (numero > 0) {
    console.log("El número es positivo");
} else if (numero < 0) {
    console.log("El número es negativo");
} else {
    console.log("El número es cero");
}

// 2. Determinar si una persona es mayor de edad
let edad = 17;
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

// 3. Clasificar calificaciones (A, B, C, D, F)
let nota = 85;
if (nota >= 90) {
    console.log("Calificación: A");
} else if (nota >= 80) {
    console.log("Calificación: B");
} else if (nota >= 70) {
    console.log("Calificación: C");
} else if (nota >= 60) {
    console.log("Calificación: D");
} else {
    console.log("Calificación: F");
}

// 4. Días de la semana con switch
let dia = 3;
switch (dia) {
    case 1: console.log("Lunes"); break;
    case 2: console.log("Martes"); break;
    case 3: console.log("Miércoles"); break;
    case 4: console.log("Jueves"); break;
    case 5: console.log("Viernes"); break;
    case 6: console.log("Sábado"); break;
    case 7: console.log("Domingo"); break;
    default: console.log("Día inválido");
}

// 5. Validar si un año es bisiesto
let año = 2024;
if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
    console.log(año + " es bisiesto");
} else {
    console.log(año + " no es bisiesto");
}