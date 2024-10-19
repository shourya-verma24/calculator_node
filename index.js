let crypto = require('crypto')
let arguements = process.argv.slice(2)
if (arguements[1]== "+"){
    console.log("ADITION")
    let x = +arguements[0]+ +arguements[2]
    console.log(x)
}
else if(arguements[1]== "-"){
    let x = +arguements[0] - +arguements[2]
    console.log(x)
    console.log("MINUS")
}
else if(arguements[1]== "*"){
    console.log("Multiplication")
    let x = +arguements[0] * +arguements[2]
    console.log(x)
}
else if(arguements[1]== "/"){
    console.log("Devision")
    let x = +arguements[0] / +arguements[2]
    console.log(x)
}
else if(arguements[1]== "sine"){
    console.log("Sin")
    let x = (Math.PI/180) * (+arguements[0])
    console.log(Math.sin(x))
}
else if(arguements[1]== "cosine"){
    console.log("Cosine " +arguements[0])
    let x = (Math.PI/180) * (+arguements[0])
    console.log(Math.cos(x))
}
else if(arguements[1]== "tangent"){
    console.log("tangent")
    let x = (Math.PI/180) * (+arguements[0])
    console.log(Math.tan(x))
}
else if(arguements[0]== "random"){
    console.log("Generating random bits")
    let min = 0
    let max = 100
    let randomBytes= crypto.randomInt(min,max)
    console.log(randomBytes)
}
else{
    console.log("invalid operator")
}
