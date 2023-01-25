const Heladeria =
{
    Helados:["Palito de helado de agua",
            "Palito de helado de crema",
            "Bombon helado marca heladix",
            "Bombon helado marca heladovich",
            "Bombon helado marca helardo",
            "Potecito de helado con confites",
            "Pote de 1/4 kg"],
    Precio:[0.6, 
            1, 
            1.6, 
            1.7, 
            1.8, 
            2.9, 
            3.4]
};

const Comprar=(Precio)=>
{
    let helado;
    let i;
    for ( i=1; i<=Heladeria.Precio.length-1; i++)
    {
        if (Precio < Heladeria.Precio[0])
        {
            helado= 0;
            break
        }
        else if (Heladeria.Precio[i-1]<=Precio  && Precio < Heladeria.Precio[i])
        {
            helado= Heladeria.Helados[i-1];
            break
        }
        else if (Precio >= Heladeria.Precio[i])
        {
            helado= Heladeria.Helados[i];
        }
    }

    if (helado==0)
    {
        return 'No te alcanza para ningun helado'
    }
    else
    {
        return `Tu ticket <br>
            Dinero del cliente ${Precio} <br>
            Compraste un ${helado} por el precio de ${Heladeria.Precio[i-1]}$ <br>
            Tu cambio es ${Precio - Heladeria.Precio[i-1]}$. <br> <br>` 
    }
    
}

const Atencion=() =>
{
    clientes=Number(prompt("Cuantas personas son"));
    for (i=1; i<=clientes ; i++)
    {
        Dinero=prompt(`Cuanto dinero tienes persona ${i}` )
        document.write(Comprar(Dinero));
    }
}

Atencion();