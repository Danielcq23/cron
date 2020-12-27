let armazenarTempos1 = document.getElementById('armazenarTempos1');
function formatatempo1(segs1) {
min1 = 0;
hr1 = 0;
/*
if hr < 10 then hr = "0"&hr
if min < 10 then min = "0"&min
if segs < 10 then segs = "0"&segs
*/
while(segs1>=60) {
if (segs1 >=60) {
segs1 = segs1-60;
min1 = min1+1;
}
}

while(min1>=60) {
if (min1 >=60) {
min1 = min1-60;
hr1 = hr1+1;
}
}

if (hr1 < 10) {hr1 = "0"+hr1}
if (min1 < 10) {min1 = "0"+min1}
if (segs1 < 10) {segs1 = "0"+segs1}
fin1 = hr1+":"+min1+":"+segs1
return fin1;
}
var segundos1 = 0; //inicio do cronometro
function conta1() {
segundos1++;
document.getElementById("counter1").innerHTML = formatatempo(segundos1);
//alert(cxt);
}

function inicia1(){
interval = setInterval("conta1();",1000);
}

function para1(){
	
	if (counter1.textContent === '00:00:00') {
        console.log('click no botão iniciar')
    }
	else
	{
clearInterval(interval);
var cx1=document.getElementById("count1").value = formatatempo(segundos1);
//alert(cx);
 let p = document.createElement('ul');
        p.innerHTML = `
        <li>Tempo : ${cx1}</li>
    `;
	    armazenarTempos1.appendChild(p);  
}
}
function zera1(){
clearInterval(interval);
segundos1 = 0;
document.getElementById("counter1").innerHTML = formatatempo(segundos1);
 while(armazenarTempos1.firstChild){
        armazenarTempos1.removeChild(armazenarTempos1.firstChild);
    }
}
