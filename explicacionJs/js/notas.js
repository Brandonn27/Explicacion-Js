console.log("Ingrese las 3 notas a promediar")

var m = parseFloat (prompt ("ingresa la nota de Matemàticas"))
var e = parseFloat (prompt ("ingresa la nota de Español"))
var s = parseFloat (prompt ("ingresa la nota de Sociales"))
var prom = (m+e+s)/3
console.log("el promedio de las 3 notas es: "+prom)

if (prom==10){      
        console.log("-Excelente 😊")
} 

else {    
    if (prom>7)
    console.log("-Bueno 🙂")
    else
    console.log("-Insuficiente 😔")
}