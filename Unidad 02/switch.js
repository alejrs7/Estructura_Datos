let expr = "mangos"
switch (expr) {
    case "mangos":
        console.log("Los mangos cuestan 5 x $1")
        break;
    case "bananas":
        console.log("Las bananas estan a 3 x $1")
        break;
    case "naranjas":
        console.log("Las naranjas estan a 2 x $1")
        break;
    default:
        console.log(`No contamos con ${expr}`)
        break;
}

console.log("Desea comprar algo adicional?")