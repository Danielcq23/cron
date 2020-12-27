let armazenarTempos2 = document.getElementById('armazenarTempos2');
function formatatempo2(segs2) {
min2 = 0;
hr2 = 0;
/*
if hr < 10 then hr = "0"&hr
if min < 10 then min = "0"&min
if segs < 10 then segs = "0"&segs
*/
while(segs2>=60) {
if (segs2 >=60) {
segs2 = segs2-60;
min2 = min2+1;
}
}

while(min2>=60) {
if (min2 >=60) {
min2 = min2-60;
hr2 = hr2+1;
}
}

if (hr2 < 10) {hr2 = "0"+hr2}
if (min2 < 10) {min2 = "0"+min2}
if (segs2 < 10) {segs2 = "0"+segs2}
fin2 = hr2+":"+min2+":"+segs2
return fin2;
}
var segundos2 = 0; //inicio do cronometro
function conta2() {
segundos2++;
document.getElementById("counter2").innerHTML = formatatempo(segundos2);
//alert(cxt);
}

function inicia2(){
interval = setInterval("conta2();",1000);
}

function para2(){
	
	if (counter2.textContent === '00:00:00') {
        console.log('click no botão iniciar')
    }
	else
	{
clearInterval(interval);
var cx2=document.getElementById("count2").value = formatatempo(segundos2);
//alert(cx);
 let p = document.createElement('ul');
        p.innerHTML = `
        <li>Tempo : ${cx2}</li>
    `;
	    armazenarTempos2.appendChild(p);  
}
}
function zera2(){
clearInterval(interval);
segundos2 = 0;
document.getElementById("counter2").innerHTML = formatatempo(segundos2);
 while(armazenarTempos2.firstChild){
        armazenarTempos2.removeChild(armazenarTempos2.firstChild);
    }
}
