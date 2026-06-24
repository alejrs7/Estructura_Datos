// Definition of the basic class for each node of the tree
class NodoArbol {
    constructor(valor) {
        this.valor = valor;
        this.izquierdo = null;
        this.derecho = null;
    }
}

// 1. Preorden: Raíz -> Izquierdo -> Derecho
function recorridoPreorden(raiz) {
    const resultado = [];
    
    function visitar(nodo) {
        if (nodo === null) return;
        
        resultado.push(nodo.valor); // 1. Raíz
        visitar(nodo.izquierdo);    // 2. Izquierdo
        visitar(nodo.derecho);      // 3. Derecho
    }
    
    visitar(raiz);
    return resultado;
}

// 2. Inorden: Izquierdo -> Raíz -> Derecho
function recorridoInorden(raiz) {
    const resultado = [];
    
    function visitar(nodo) {
        if (nodo === null) return;
        
        visitar(nodo.izquierdo);    // 1. Izquierdo
        resultado.push(nodo.valor); // 2. Raíz
        visitar(nodo.derecho);      // 3. Derecho
    }
    
    visitar(raiz);
    return resultado;
}

// 3. Postorden: Izquierdo -> Derecho -> Raíz
function recorridoPostorden(raiz) {
    const resultado = [];
    
    function visitar(nodo) {
        if (nodo === null) return;
        
        visitar(nodo.izquierdo);    // 1. Izquierdo
        visitar(nodo.derecho);      // 2. Derecho
        resultado.push(nodo.valor); // 3. Raíz
    }
    
    visitar(raiz);
    return resultado;
}


// ==========================================
//            EJEMPLO DE PRUEBA
// ==========================================

/* Construiremos el siguiente árbol binario:
       10
      /  \
     5    15
    / \
   3   7
*/

const raiz = new NodoArbol(10);
raiz.izquierdo = new NodoArbol(5);
raiz.derecho = new NodoArbol(15);

// Añadimos más profundidad para que la prueba sea completa
raiz.izquierdo.izquierdo = new NodoArbol(3);
raiz.izquierdo.derecho = new NodoArbol(7);


// Ejecución de las funciones y muestra de resultados
console.log("--- RECORRIDOS DE ÁRBOLES BINARIOS ---");

console.log("Preorden (Raíz, Izq, Der):");
console.log(recorridoPreorden(raiz)); 
// Salida esperada: [10, 5, 3, 7, 15]

console.log("\nInorden (Izq, Raíz, Der):");
console.log(recorridoInorden(raiz));  
// Salida esperada: [3, 5, 7, 10, 15]

console.log("\nPostorden (Izq, Der, Raíz):");
console.log(recorridoPostorden(raiz)); 
//Expected output: [3, 7, 5, 15, 10]
// ====================================================================
// SECCIÓN 4: ANÁLISIS TEÓRICO Y DE RENDIMIENTO
// ====================================================================

/*
-----------------------------------------------------------------------
Pregunta 4.1: Depuración Mental (La Pila de Llamadas) [cite: 118]
-----------------------------------------------------------------------
1. Implementación analizada:
   La función de Fibonacci provista realiza una bifurcación doble en cada paso[cite: 119, 127].

2. Árbol de Llamadas de Ejecución para fibonacci(4): [cite: 128]

                      fibonacci(4)
                     /            \
          fibonacci(3)            fibonacci(2)
          /          \            /          \
    fibonacci(2)   fibonacci(1) fibonacci(1) fibonacci(0)
    /          \
fibonacci(1) fibonacci(0)

3. Subproblemas redundantes detectados: [cite: 129]
   - fibonacci(2) se calcula de forma independiente 2 veces.
   - fibonacci(1) se evalúa en total 3 veces en ramas distintas.
   - fibonacci(0) se evalúa 2 veces.

4. Explicación de la complejidad exponencial O(2^n): [cite: 130]
   Cada llamada que no llega al caso base se abre en dos subllamadas nuevas[cite: 124, 127]. 
   Esto duplica la cantidad de trabajo con cada nivel que aumenta 'n', creando 
   un árbol de ejecución de tamaño geométrico proporcional a 2^n[cite: 130].

   Impacto con n > 40: [cite: 130]
   Para n = 40, se requerirían más de un billón (2^40) de llamadas a la función[cite: 130]. 
   Como JavaScript se ejecuta en un solo hilo, intentar procesar esto de forma 
   sincrónica congelará por completo el navegador o el proceso de Node.js[cite: 15], 
   dejando la aplicación inoperable por sobrecarga de CPU[cite: 130].

-----------------------------------------------------------------------
Pregunta 4.2: El Desbordamiento de Pila (Stack Overflow) [cite: 131]
-----------------------------------------------------------------------
¿Qué es? [cite: 132]
Es un error fatal de memoria que ocurre cuando la pila de llamadas (Call Stack) 
se satura debido a un exceso de marcos de ejecución acumulados[cite: 9, 10, 132].

Condiciones en motores modernos (V8 / Node.js): [cite: 132]
Cada invocación a una función reserva un "marco" (stack frame) con sus variables[cite: 9, 10]. 
Los entornos modernos limitan este espacio (usualmente entre 10,000 y 50,000 llamadas). 
Ocurre principalmente cuando:
1. Hay una recursión infinita por la ausencia o mala lógica del caso base[cite: 16].
2. Se procesan colecciones de datos tan masivas que la cantidad de saltos recursivos 
   supera físicamente la capacidad de la pila[cite: 132].

Formas prácticas de prevenirlo en producción: [cite: 132]
1. Enfoque Iterativo: Transformar el proceso recursivo en bucles tradicionales 
   (como 'while' o 'for'), los cuales no saturan la pila de llamadas del sistema[cite: 18].
2. Trampolines (Trampolining): Modificar la estructura de la función para que devuelva 
   una función interna en lugar de llamarse directamente, usando un bucle de control 
   externo que procesa cada ejecución de forma aislada sin acumular memoria.
*/

// -----------------------------------------------------------------------
// Pregunta 4.3: Optimización - Recursividad de Cola (Tail Recursion) [cite: 133]
// -----------------------------------------------------------------------
// 1. Definición con mis palabras: [cite: 135]
// Ocurre cuando la llamada recursiva es la última acción absoluta que realiza 
// la función. El entorno no necesita retener el contexto actual porque no quedan 
// operaciones pendientes (como sumas o multiplicaciones) al regresar de la llamada.

// 2. Implementación de Factorial de Cola usando parámetro acumulador: [cite: 136, 138]
function factorialCola(n, acumulador = 1) { // [cite: 138]
    // Caso Base [cite: 16]
    if (n <= 1) {
        return acumulador;
    }
    // Caso Recursivo de Cola (La llamada es la instrucción final) [cite: 16, 135]
    return factorialCola(n - 1, n * acumulador);
}

// Validación rápida de la función optimizada
console.log("\n--- OPTIMIZACIÓN DE COLA (Factorial) ---");
console.log("Factorial de 5 (esperado 120):", factorialCola(5)); // Imprime 120