//Use Case: Managing Student Notes Using Arrangements
// Estructura de datos: Array lineal

const curso = {
  nombre: "Estructuras de Datos",
  estudiantes: [],
};

// Agregar estudiante con nota
function agregarEstudiante(nombre, nota) {
  if (nota < 0 || nota > 10) {
    console.log(`Error: la nota debe estar entre 0 y 10.`);
    return;
  }
  curso.estudiantes.push({ nombre, nota });
  console.log(`✔ Agregado: ${nombre} con nota ${nota}`);
}

// Eliminar estudiante por nombre
function eliminarEstudiante(nombre) {
  const index = curso.estudiantes.findIndex(
    (e) => e.nombre.toLowerCase() === nombre.toLowerCase()
  );
  if (index === -1) {
    console.log(`No se encontró al estudiante "${nombre}".`);
    return;
  }
  curso.estudiantes.splice(index, 1);
  console.log(`✔ Eliminado: ${nombre}`);
}

// Buscar estudiante por nombre
function buscarEstudiante(nombre) {
  const encontrado = curso.estudiantes.find(
    (e) => e.nombre.toLowerCase() === nombre.toLowerCase()
  );
  if (!encontrado) {
    console.log(`Estudiante "${nombre}" no encontrado.`);
    return;
  }
  console.log(`Estudiante: ${encontrado.nombre} | Nota: ${encontrado.nota}`);
}

// Calcular promedio del curso
function promedio() {
  if (curso.estudiantes.length === 0) {
    console.log("No hay estudiantes registrados.");
    return;
  }
  const total = curso.estudiantes.reduce((acc, e) => acc + e.nota, 0);
  const prom = (total / curso.estudiantes.length).toFixed(2);
  console.log(`Promedio del curso: ${prom}`);
}

// Nota máxima y mínima
function estadisticas() {
  if (curso.estudiantes.length === 0) {
    console.log("No hay estudiantes registrados.");
    return;
  }
  const notas = curso.estudiantes.map((e) => e.nota);
  const max = Math.max(...notas);
  const min = Math.min(...notas);
  const mejores = curso.estudiantes.filter((e) => e.nota === max).map((e) => e.nombre);
  const menores = curso.estudiantes.filter((e) => e.nota === min).map((e) => e.nombre);
  console.log(`Nota máxima: ${max} → ${mejores.join(", ")}`);
  console.log(`Nota mínima: ${min} → ${menores.join(", ")}`);
}

// Listar todos
function listarEstudiantes() {
  if (curso.estudiantes.length === 0) {
    console.log("No hay estudiantes registrados.");
    return;
  }
  console.log(`\n=== ${curso.nombre} ===`);
  curso.estudiantes.forEach((e, i) =>
    console.log(`  ${i + 1}. ${e.nombre} — ${e.nota}`)
  );
}

// --- Pruebas ---
agregarEstudiante("David Ruiz", 9.5);
agregarEstudiante("Leonel Lima", 8.0);
agregarEstudiante("Diego Iñiguez", 7.5);
agregarEstudiante("Francisco Chamba", 9.0);
agregarEstudiante("Fernando Ortega", 6.5);
agregarEstudiante("Ana Torres", 11); // Error esperado

listarEstudiantes();
buscarEstudiante("Diego Iñiguez");
promedio();
estadisticas();
eliminarEstudiante("Leonel Lima");
listarEstudiantes();