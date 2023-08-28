function getaction()
{
    //Variable pin
    var p = document.getElementById ('number').value;
    var a = 1234;
    //Comparar pin
    if(p==a)
        {
            document.getElementById ("demo").innerHTML ="Selecciona tu transacción";
            document.getElementById ('options12'). style.display = 'block'; 
        }
    else
        {
            document.getElementById ("demo").innerHTML = "Codigo invalido";
        }
}

function myfunction(val)
{
//Mostrar el saldo
    m = 10000;
    if(val==1)//Val 1
        {
            document.getElementById ('demo1' ).innerHTML ="Tu saldo es: "+m;
            document.getElementById ('display' ). style.display = 'none';
            document.getElementById ('display1' ). style.display = 'none';
        }
    if(val==2)//Val 2
        {
            document.getElementById ('display').style.display = 'block';
            document.getElementById ('display1').style.display = 'none';
        }
    if(val==3)//Val 3
        {
            document.getElementById ('display1').style.display = 'block';
            document.getElementById ('display').style.display = 'none';
        }
}
function getamount()
{
    //Mostrar el saldo nuevo
    m = 10000;
    //Obtener el saldo
    var a = document.getElementById ('amount1' ).value;
    //Verificar que la cantidad sea multiplo de 100
    if(a<=m&&a%100==0)
    //alert("" +a);
        document.getElementById ('display').innerHTML ="La cantidad de retiro es:  "+a;
    else
    //alert("invalid cash");
        document.getElementById ('display').innerHTML ="Monto invalido";
}
function getamount1()
{

    var x = document.getElementById ("myselect1").value
    m = 10000;
    //Verificar que la cantidad sea multiplo de 100
    if(x<=m&&x%100==0)
    //alert("take your amount" +x);
        document.getElementById ('display1').innerHTML ="Toma tu retiro : "+x;
    else
        document.getElementById ('display1').innerHTML ="Monto invalido";
}