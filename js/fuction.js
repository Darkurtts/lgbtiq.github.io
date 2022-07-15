function mostrarSeleccionado()
{
    let mostrar;
    let sumar=0;
    //1
  if (document.getElementById('radio1').checked)
  {
    mostrar="INCORRECTO";
  }
  if (document.getElementById('radio2').checked)
  {
    mostrar="CORRECTO";
    sumar++;
  }
  if (document.getElementById('radio3').checked)
  {
    mostrar="INCORRECTO";
  }
  //2
  if (document.getElementById('radio4').checked)
  {
    mostrar="INCORRECTO";
  }
  if (document.getElementById('radio5').checked)
  {
    mostrar="INCORRECTO";
  }
  if (document.getElementById('radio6').checked)
  {
    mostrar="CORRECTO";
    sumar++;
  }
  //3
if (document.getElementById('checkbox1').checked) {
  sumar++;
}
if (document.getElementById('checkbox2').checked) {
  sumar++;
}
if (document.getElementById('checkbox3').checked) {
  sumar++;
}
if (document.getElementById('checkbox4').checked) {
  sumar++;
}
if (document.getElementById('checkbox5').checked) {
  sumar++;
}
if (document.getElementById('checkbox6').checked) {
  sumar++;
}
if (document.getElementById('checkbox7').checked) {
  sumar++;
}
if (document.getElementById('checkbox8').checked) {
  sumar++;
}
if (document.getElementById('checkbox9').checked) {
  sumar++;
}
if (document.getElementById('checkbox10').checked) {
  sumar++;
}
if (document.getElementById('checkbox11').checked) {
  sumar++;
}
//4
if (document.getElementById('checkbox12').checked) {
  sumar++;
}
if (document.getElementById('checkbox13').checked) {
  sumar++;
}
if (document.getElementById('checkbox14').checked) {
  sumar++;
}
if (document.getElementById('checkbox15').checked) {
  sumar++;
}

if (document.getElementById('checkbox16').checked) {
  sumar++;
}
if (document.getElementById('checkbox17').checked) {
  sumar++;
}
if (document.getElementById('checkbox18').checked) {
 }
//5
if (document.getElementById('checkbox19').checked) {
  sumar++;
}

if (document.getElementById('checkbox20').checked) {
  
}
if (document.getElementById('checkbox21').checked) {
  sumar++;
}
if (document.getElementById('checkbox22').checked) {
  sumar++;
 }
//6
if (document.getElementById('checkbox23').checked) {
  sumar++;
}
if (document.getElementById('checkbox24').checked) {
  sumar++;
}
if (document.getElementById('checkbox25').checked) {
  sumar++;
 }
 //7
 if (document.getElementById('checkbox26').checked) {
  
}
if (document.getElementById('checkbox27').checked) {
  sumar++;
}
if (document.getElementById('checkbox28').checked) {
  
 }
 if (document.getElementById('checkbox29').checked) {
  sumar++;
 }
 //8
 if (document.getElementById('checkbox30').checked) {
  
}
if (document.getElementById('checkbox31').checked) {
  sumar++;
}
if (document.getElementById('checkbox32').checked) {
  
 }
 if (document.getElementById('checkbox33').checked) {
  sumar++;
 }
 if (document.getElementById('checkbox34').checked) {
  
 }
 let porcentaje;
 porcentaje=sumar*100/31;

alert("cantidad de respuestas correctas: "+sumar+" su porcentaje es de: "+porcentaje+"%");
}
