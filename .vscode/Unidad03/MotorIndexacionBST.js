class SearchNode {
    constructor(keyword, urlCache) {
        this.keyword = keyword;
        this.urlCache = urlCache;
        this.visitas = 1;
        this.izquierdo = null;
        this.derecho = null;
    }
}

class MotorIndexacionBST {
    constructor() {
        this.raiz = null;
    }

    indexar(keyword, urlCache) {
        const nuevoNodo = new NodoBusqueda(keyword, urlCache); // <-- 'new' agregado
        if (this.raiz === null) {
            this.raiz = nuevoNodo;
            return;
        }

        let actual = this.raiz;
        while (true) {
            const comparacion = keyword.localeCompare(actual.keyword);

            if (comparacion === 0) {
                actual.visitas++; // ya existe -> incrementa frecuencia
                return;
            } else if (comparacion < 0) {
                if (actual.izquierdo === null) {
                    actual.izquierdo = nuevoNodo;
                    return;
                }
                actual = actual.izquierdo;
            } else {
                if (actual.derecho === null) {
                    actual.derecho = nuevoNodo;
                    return;
                }
                actual = actual.derecho;
            }
        }
    }

    // Búsqueda iterativa O(log n) esperado -> evita Stack Overflow con árboles muy profundos
    buscar(keyword) {
        let actual = this.raiz;
        let ciclosCPU = 0;

        while (actual !== null) {
            ciclosCPU++;
            const comparacion = keyword.localeCompare(actual.keyword);

            if (comparacion === 0) {
                console.log(`Encontrado tras ${ciclosCPU} ciclos de CPU`);
                return actual;
            } else if (comparacion < 0) {
                actual = actual.izquierdo;
            } else {
                actual = actual.derecho;
            }
        }

        console.log(`No encontrado tras ${ciclosCPU} ciclos de CPU`);
        return null;
    }

    // Recorrido Inorden: izquierda -> nodo -> derecha => historial ordenado A-Z
    exportarHistorial(nodo = this.raiz, resultado = []) {
        if (nodo !== null) {
            this.exportarHistorial(nodo.izquierdo, resultado);
            resultado.push({ keyword: nodo.keyword, urlCache: nodo.urlCache, visitas: nodo.visitas });
            this.exportarHistorial(nodo.derecho, resultado);
        }
        return resultado;
    }
}