var cEscritorios = parseFloat(prompt("Digite la cantidad de escritorios que desea obtener..."))
var total = 100000



 if(cEscritorios <5){
    console.log(" Descuento del 10% ")
    total = total-(total*0.1)
    console.log( " Total a pagar con descuento "+total)
 }

 else{
    if(cEscritorios >=5){
        if( cEscritorios <10){
            console.log(" Descuento del 20% ")
            total = total*20%-total
    console.log( " Total a pagar con descuento "+total)
        }else{
            if( cEscritorios >=10)
            console.log(" si es mayor o igual 40%")
            total = total*40%-total
    console.log( " Total a pagar con descuento "+total)
        }
    
    }
 }