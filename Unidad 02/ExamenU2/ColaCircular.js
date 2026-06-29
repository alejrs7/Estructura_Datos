class ColaCircular {
  constructor(capacidad) {
    this.capacidad = capacidad;
    this.arreglo = new Array(capacidad).fill(null);
    this.front = -1;
    this.rear = -1;
    this.size = 0;
  }

  isEmpty() { return this.size === 0; }
  isFull()  { return this.size === this.capacidad; }

  enqueue(equipo) {
    if (this.isFull()) throw new Error(`Cola llena: no se puede inscribir "${equipo}"`);
    if (this.isEmpty()) { this.front = 0; this.rear = 0; }
    else this.rear = (this.rear + 1) % this.capacidad;
    this.arreglo[this.rear] = equipo;
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) throw new Error("Cola vacía: no hay equipos por procesar");
    const equipo = this.arreglo[this.front];
    this.arreglo[this.front] = null;
    if (this.size === 1) { this.front = -1; this.rear = -1; }
    else this.front = (this.front + 1) % this.capacidad;
    this.size--;
    return equipo;
  }

  peek() {
    if (this.isEmpty()) throw new Error("Cola vacía");
    return this.arreglo[this.front];
  }

  estado() {
    const slots = this.arreglo.map((v, i) => {
      const f = i === this.front ? "F" : " ";
      const r = i === this.rear  ? "R" : " ";
      return `[${i}]${f}${r} ${v ?? "null"}`;
    });
    console.log(`\nfront=${this.front}  rear=${this.rear}  size=${this.size}/${this.capacidad}`);
    slots.forEach(s => console.log("  " + s));
  }
}


const cola = new ColaCircular(5);

const ops = [
  ["enqueue", "Los Cóndores"],
  ["enqueue", "Águilas del Sur"],
  ["enqueue", "Titanio FC"],
  ["dequeue"],
  ["enqueue", "Rayos del Norte"],
  ["dequeue"],
  ["enqueue", "Volcanes UNL"],
  ["enqueue", "Relámpagos"],
];

ops.forEach(([op, arg]) => {
  if (op === "enqueue") {
    const prevRear = cola.rear;
    cola.enqueue(arg);
    const circular = prevRear === cola.capacidad - 1 && cola.rear === 0;
    console.log(`enqueue("${arg}")${circular ? "  ← rear: (4+1)%5 = 0  ✓ circular" : ""}`);
  } else {
    const equipo = cola.dequeue();
    console.log(`dequeue() → "${equipo}"`);
  }
  cola.estado();
});

try {
  cola.enqueue("A");
  cola.enqueue("B");
  cola.enqueue("C");
  cola.enqueue("Overflow");
} catch (e) {
  console.log(`\n${e.message}`);
}

console.log("\nProcesando en orden FIFO:");
while (!cola.isEmpty()) {
  console.log(`  → ${cola.dequeue()}`);
}

try { cola.dequeue(); } catch (e) { console.log(e.message); }