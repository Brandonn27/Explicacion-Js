 //()
/*  if (pregunta=="tiene pareja?"){
    Lo manda la pareja 
 }else {
    Lo manda la mamá
 } */

/*  var valor1 = 4
 var valor2 = 7

 if (valor1>valor2){
    console.log(valor1+" es ,ayor que "+valor2)
 } else {
    console.log(valor2+" es mayor que "+valor1)

    > Mayor que
    < Menor que
    >= Mayor o igual qué
    <= Menor o igual qué
    == igual

 } */

 var valor1 = parseFloat (prompt ("ingresa el valor 1"))
 var valor2 = parseFloat (prompt ("ingresa el valor 2"))
 var valor3 = parseFloat (prompt ("ingresa el valor 3"))

 if (valor1>valor2){
   if (valor1>valor3)
    console.log(valor1+" es mayor que "+valor2+" y "+valor3)
    else 
      console.log (valor3+" es mayor que "+valor1+" y "+valor2)

 } else {
   if (valor2>valor3)
    console.log(valor2+" es mayor que "+valor1+" y "+valor3)
    else
      console.log(valor3+" es mayor que "+valor1+" y "+valor2)
 }