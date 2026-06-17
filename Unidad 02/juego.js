const numberSecret = Math.floor(Math.random()*10 + 1)
const numeroJugador = parseInt(prompt("Adivina el número secreto del 1 al 10"))
console.log(`Este es el número con el que juegas ${numeroJugador}`)

if (numeroJugador === numeroSecreto){
    console.log("Felicitaciones, adivinaste el número secreto")
} else if (numeroJugador < numeroJugador){
    console.log("numero menor |||, intenta nuevamente")
} else if (numeroJugador > numeroJugador){
    console.log("numero mayor |||, intenta nuevamente")
} else {
    console.log("Ánimo, la siguiente será")
}