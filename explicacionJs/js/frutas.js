var manzana = parseFloat(prompt("El precio de la Manzana es de 2$, digita la cantidad que desea llevar:"))
var maracuya = parseFloat(prompt("El precio de la Maracuyá es de 5$, digita la cantidad que desea llevar:"))
var mora = parseFloat(prompt("El precio de la Mora es de 3$, digita la cantidad que desea llevar:"))
var mango = parseFloat(prompt("El precio de la Mango es de 6$, digita la cantidad que desea llevar:"))
var melon = parseFloat(prompt("El precio de la Melon es de 10$, digita la cantidad que desea llevar:"))
var melocoton = parseFloat(prompt("El precio de la Melocotón es de 12$, digita la cantidad que desea llevar:"))

console.log("La cantidad de tu compra es:" + "Manzanas: " + manzana + " Maracuyá: " + manzana + " Mora: " + manzana + " Mango: " + manzana)

tManzana = 0
tMaracuya = 0
tMora = 0
tMango = 0
tMelon = 0
tMelocoton = 0
tFrutas = 0
total = 0


if (manzana >= 0) {
    tManzana = manzana * 2
} if (maracuya >= 0) {
    tMaracuya = maracuya * 5
} if (mora >= 0) {
    tMora = mora * 3
} if (mango >= 0) {
    tMango = mango * 6
} if (melon >= 0) {
    tMelon = melon * 10
} if (melocoton >= 0) {
    tMelocoton = melocoton * 12
}

total = tManzana + tMaracuya + tMora + tMango + tMelon + tMelocoton + tFrutas
totalCompra = total + tFrutas

alert("El Valor total de la compra de: " + manzana + " manzanas," + maracuya + " Maracuya," + mora + " Mora," + mango + " Mango," + melon + " Melon," + melocoton + " Melocotón."+" es de: " + totalCompra+"$")