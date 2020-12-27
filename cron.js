let armazenarTempos = document.getElementById('armazenarTempos');
function formatatempo(segs) {
min = 0;
hr = 0;
/*
if hr < 10 then hr = "0"&hr
if min < 10 then min = "0"&min
if segs < 10 then segs = "0"&segs
*/
while(segs>=60) {
if (segs >=60) {
segs = segs-60;
min = min+1;
}
}

while(min>=60) {
if (min >=60) {
min = min-60;
hr = hr+1;
}
}

if (hr < 10) {hr = "0"+hr}
if (min < 10) {min = "0"+min}
if (segs < 10) {segs = "0"+segs}
fin = hr+":"+min+":"+segs
return fin;
}
var segundos = 0; //inicio do cronometro
function conta() {
segundos++;
document.getElementById("counter").innerHTML = formatatempo(segundos);
//alert(cxt);
}

function inicia(){
interval = setInterval("conta();",1000);
}

function para(){
	
	if (counter.textContent === '00:00:00') {
        console.log('click no botão iniciar')
    }
	else
	{
clearInterval(interval);
var cx=document.getElementById("count").value = formatatempo(segundos);
//alert(cx);
 let p = document.createElement('ul');
        p.innerHTML = `
        <li>Tempo : ${cx}</li>
    `;
	    armazenarTempos.appendChild(p);  
}
}
function zera(){
clearInterval(interval);
segundos = 0;
document.getElementById("counter").innerHTML = formatatempo(segundos);
 while(armazenarTempos.firstChild){
        armazenarTempos.removeChild(armazenarTempos.firstChild);
    }
}
