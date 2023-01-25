/*
Tres chicos de 23 años perfectamente normales entran en una heladeria a comprar un helado
Pero hay un problema, los precios no estan al lado de su respectivo helado
Ellos quieren comprar el helado mas caro con el dinero que tienen
Cada uno tiene distintas cantidades de dinero

Roberto tiene $1.5 USD
Pedro tiene $1.7 USD
Cofla tiene $3 USD

Los precios de los helados son lo siguientes:
Palito de helado de agua: $0.6 USD
Palito de helado de crema: $1 USD
Bombon helado marca heladix: $1.6 USD
Bombon helado marca heladovich: $1.7 USD
Bombon helado marca helardo: $1.8 USD
Potecito de helado con confites: $2.9 USD
Pote 1/4 kg -> $2.9 USD


costo de cada helado
problema A
-Que ingresen el monto que tienen y mostrarle el helado mas caro
-Si hay 2 o mas con el mismo precio, mostrar ambos
-Coflan quiere saber cuanto es el cambio
*/

let DinRoberto=prompt("Cuanto dinero tiene Roberto");
let DinPedro=prompt("Cuanto dinero tiene Pedro");
let DinCofla=prompt("Cuanto dinero tiene Cofla");

DinRoberto=parseInt(DinRoberto);
DinPedro=parseInt(DinPedro);
DinCofla=parseInt(DinCofla);

let CambioRoberto;
let CambioPedro;
let CambioCofla;

//Dinero de Roberto 

document.write(`<br>`);
document.write("Roberto");
document.write(`<br>`);

if (DinRoberto>=0.6 && DinRoberto<1)
{
    document.write(`<br>`);
    document.write("Palito de helado de agua: $0.6 USD");
    document.write(`<br>`);
    CambioRoberto=DinRoberto-0.6;
    document.write("Su cambio es " + CambioRoberto);
    document.write(`<br>`);
}
else if (DinRoberto>=1 && DinRoberto<1.6)
{
    document.write(`<br>`)
    document.write("Palito de helado de crema: $1 USD")
    document.write(`<br>`)
    CambioRoberto=DinRoberto-1;
    document.write("Su cambio es " + CambioRoberto)
    document.write(`<br>`)
}

else if (DinRoberto>=1.6 && DinRoberto<1.7)
{
    document.write(`<br>`);
    document.write("Bombon helado marca heladix: $1.6 USD");
    document.write(`<br>`);
    CambioRoberto=DinRoberto-1.6;;
    document.write("Su cambio es " + CambioRoberto);
    document.write(`<br>`);
}

else if (DinRoberto>=1.7 && DinRoberto<1.8)
{
    document.write(`<br>`);
    document.write("Bombon helado marca heladovich: $1.7 USD");
    document.write(`<br>`);
    CambioRoberto=DinRoberto-1.7;
    document.write("Su cambio es " + CambioRoberto);
    document.write(`<br>`);
}

else if (DinRoberto>=1.8 && DinRoberto<2.9)
{
    document.write(`<br>`);
    document.write("Bombon helado marca helardo: $1.8 USD");
    document.write(`<br>`);
    CambioRoberto=DinRoberto-1.8;
    document.write("Su cambio es " + CambioRoberto);
    document.write(`<br>`);
}

else if (DinRoberto>=2.9)
{
    document.write(`<br>`);
    document.write("Potecito de helado con confites: $2.9 USD");
    document.write(`<br>`);
    document.write("Pote 1/4 kg -> $2.9 USD");
    document.write(`<br>`);
    CambioRoberto=DinRoberto-2.9;
    document.write("Su cambio es " + CambioRoberto);
    document.write(`<br>`);
}
else
{
    document.write(`<br>`);
    document.write("No te alcanza para ningun helado");
    document.write(`<br>`);
}


//Dinero de Pedro
document.write(`<br>`);
document.write("Pedro");
document.write(`<br>`);

if (DinPedro>=0.6 && DinPedro<1)
{
    document.write(`<br>`);
    document.write("Palito de helado de agua: $0.6 USD");
    document.write(`<br>`);
    CambioPedro=DinPedro-0.6;
    document.write("Su cambio es " + CambioPedro);
    document.write(`<br>`);
}
else if (DinPedro>=1 && DinPedro<1.6)
{
    document.write(`<br>`)
    document.write("Palito de helado de crema: $1 USD")
    document.write(`<br>`)
    CambioPedro=DinPedro-1;
    document.write("Su cambio es " + CambioPedro)
    document.write(`<br>`)
}

else if (DinPedro>=1.6 && DinPedro<1.7)
{
    document.write(`<br>`);
    document.write("Bombon helado marca heladix: $1.6 USD");
    document.write(`<br>`);
    CambioPedro=DinPedro-1.6;;
    document.write("Su cambio es " + CambioPedro);
    document.write(`<br>`);
}

else if (DinPedro>=1.7 && DinPedro<1.8)
{
    document.write(`<br>`);
    document.write("Bombon helado marca heladovich: $1.7 USD");
    document.write(`<br>`);
    CambioPedro=DinPedro-1.7;
    document.write("Su cambio es " + CambioPedro);
    document.write(`<br>`);
}

else if (DinPedro>=1.8 && DinPedro<2.9)
{
    document.write(`<br>`);
    document.write("Bombon helado marca helardo: $1.8 USD");
    document.write(`<br>`);
    CambioPedro=DinPedro-1.8;
    document.write("Su cambio es " + CambioPedro);
    document.write(`<br>`);
}

else if (DinPedro>=2.9)
{
    document.write(`<br>`);
    document.write("Potecito de helado con confites: $2.9 USD");
    document.write(`<br>`);
    document.write("Pote 1/4 kg -> $2.9 USD");
    document.write(`<br>`);
    CambioPedro=DinPedro-2.9;
    document.write("Su cambio es " + CambioPedro);
    document.write(`<br>`);
}
else
{
    document.write(`<br>`);
    document.write("No te alcanza para ningun helado");
    document.write(`<br>`);
}

//Dinero de cofla

document.write(`<br>`);
document.write("Cofla");
document.write(`<br>`);

if (DinCofla>=0.6 && DinCofla<1)
{
    document.write(`<br>`);
    document.write("Palito de helado de agua: $0.6 USD");
    document.write(`<br>`);
    CambioCofla=DinCofla-0.6;
    document.write("Su cambio es " + CambioCofla);
    document.write(`<br>`);
}
else if (DinCofla>=1 && DinCofla<1.6)
{
    document.write(`<br>`)
    document.write("Palito de helado de crema: $1 USD")
    document.write(`<br>`)
    CambioCofla=DinCofla-1;
    document.write("Su cambio es " + CambioCofla)
    document.write(`<br>`)
}

else if (DinCofla>=1.6 && DinCofla<1.7)
{
    document.write(`<br>`);
    document.write("Bombon helado marca heladix: $1.6 USD");
    document.write(`<br>`);
    CambioCofla=DinCofla-1.6;;
    document.write("Su cambio es " + CambioCofla);
    document.write(`<br>`);
}

else if (DinCofla>=1.7 && DinCofla<1.8)
{
    document.write(`<br>`);
    document.write("Bombon helado marca heladovich: $1.7 USD");
    document.write(`<br>`);
    CambioCofla=DinCofla-1.7;
    document.write("Su cambio es " + CambioCofla);
    document.write(`<br>`);
}

else if (DinCofla>=1.8 && DinCofla<2.9)
{
    document.write(`<br>`);
    document.write("Bombon helado marca helardo: $1.8 USD");
    document.write(`<br>`);
    CambioCofla=DinCofla-1.8;
    document.write("Su cambio es " + CambioCofla);
    document.write(`<br>`);
}

else if (DinCofla>=2.9)
{
    document.write(`<br>`);
    document.write("Potecito de helado con confites: $2.9 USD");
    document.write(`<br>`);
    document.write("Pote 1/4 kg -> $2.9 USD");
    document.write(`<br>`);
    CambioCofla=DinCofla-2.9;
    document.write("Su cambio es " + CambioCofla);
    document.write(`<br>`);
}
else
{
    document.write(`<br>`);
    document.write("No te alcanza para ningun helado");
    document.write(`<br>`);
}

document.write(`<br>`);
document.write(`<h1>"O sino usar este codigo mejor"</h1>`);
document.write(`<br>`);

const definirCompra=(n)=>{
    let Din=prompt(`Dinero de ${n}`);
    if (Din>=0.6 && Din<1) return (`${n}): helado de agua`);
    if (Din>=1 && Dia<1.6) return (`${n}): helado de crema`); 
    if (Din>=1.6 && Din<1.7) return (`${n}): helado de heladix`)
    if (Din>=1.7 && Din<1.8) return (`${n}): helado de heladovich`)
    if (Din>=1.8 && Din<2.9) return (`${n}): helado de helardo`)
    if (Din>=2.9) return (`${n}): helado de confites o pote de 1/4kg`)
    else return (`${n}: No te alcanza para ningun helado pobre`)
}
console.log(definirCompra("Roberto"));
console.log(definirCompra("Pedro"));
console.log(definirCompra("Cofla"));