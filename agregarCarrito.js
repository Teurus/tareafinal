var sumaTotal = 0.0;
var cafe = document.getElementById("ca");
var galleta = document.getElementById("ga");
var keke = document.getElementById("ke");
var s = document.getElementById("total");

function aC1(){
    cafe.innerHTML += `
    Cafe late <br>
    `;
    sumaTotal += 9.00;
    s.innerHTML="TOTAL: S/"+sumaTotal;
}
function aC2(){
    cafe.innerHTML += `
    Cafe capuccino <br>
    `;
    sumaTotal += 9.00;
    s.innerHTML="TOTAL: S/"+sumaTotal;
}
function aC3(){
    cafe.innerHTML += `
    Cafe frapuchino <br>
    `;
    sumaTotal += 7.00;
    s.innerHTML="TOTAL: S/"+sumaTotal;
}
function aC4(){
    cafe.innerHTML += `
    Café dopio <br>
    `;
    sumaTotal += 7.50;
    s.innerHTML="TOTAL: S/"+sumaTotal;
}
function aC5(){
    cafe.innerHTML += `
    Cafe expreso <br>
    `;
    sumaTotal += 7.50;
    s.innerHTML="TOTAL: S/"+sumaTotal;
}
function aC6(){
    cafe.innerHTML += `
    Cafe frape <br>
    `;
    sumaTotal += 7.50;
    s.innerHTML="TOTAL: S/"+sumaTotal;
}
function aC7(){
    cafe.innerHTML += `
    Cafe lungo <br>
    `;
    sumaTotal += 8.00;
    s.innerHTML="TOTAL: S/"+sumaTotal;
}
function aC8(){
    cafe.innerHTML += `
    Cafe machiato <br>
    `;
    sumaTotal += 8.00;
    s.innerHTML="TOTAL: S/"+sumaTotal;
}


function aG1(){
    galleta.innerHTML += `
    Galleta de alfajor <br>
    `;
    sumaTotal += 3.50;
    s.innerHTML="TOTAL: S/"+sumaTotal;
}
function aG2(){
    galleta.innerHTML += `
    Galleta de chocochips <br>
    `;
    sumaTotal += 3.50;
    s.innerHTML="TOTAL: S/"+sumaTotal;
}
function aG3(){
    galleta.innerHTML += `
    Galleta de chocolate <br>
    `;
    sumaTotal += 3.50;
    s.innerHTML="TOTAL: S/"+sumaTotal;
}
function aG4(){
    galleta.innerHTML += `
    Galleta de crema <br>
    `;
    sumaTotal += 3.50;
    s.innerHTML="TOTAL: S/"+sumaTotal;
}
function aG5(){
    galleta.innerHTML += `
    Galleta de lucuma <br>
    `;
    sumaTotal += 4.00;
    s.innerHTML="TOTAL: S/"+sumaTotal;
}
function aG6(){
    galleta.innerHTML += `
    Galleta de manjar <br>
    `;
    sumaTotal += 3.00;
    s.innerHTML="TOTAL: S/"+sumaTotal;
}
function aG7(){
    galleta.innerHTML += `
    Galleta de nutella <br>
    `;
    sumaTotal += 3.00;
    s.innerHTML="TOTAL: S/"+sumaTotal;
}
function aG8(){
    galleta.innerHTML += `
    Galleta de s'more <br>
    `;
    sumaTotal += 3.00;
    s.innerHTML="TOTAL: S/"+sumaTotal;
}

function aK1(){
    keke.innerHTML += `
    Keke de calabaza <br>
    `;
    sumaTotal += 5.00;
    s.innerHTML="TOTAL: S/"+sumaTotal;
}
function aK2(){
    keke.innerHTML += `
    Keke de chocolate <br>
    `;
    sumaTotal += 5.00;
    s.innerHTML="TOTAL: S/"+sumaTotal;
}
function aK3(){
    keke.innerHTML += `
    Keke de fresa <br>
    `;
    sumaTotal += 5.00;
    s.innerHTML="TOTAL: S/"+sumaTotal;
}
function aK4(){
    keke.innerHTML += `
    Keke de hershey <br>
    `;
    sumaTotal += 5.00;
    s.innerHTML="TOTAL: S/"+sumaTotal;
}
function aK5(){
    keke.innerHTML += `
    Keke de oreo <br>
    `;
    sumaTotal += 5.00;
    s.innerHTML="TOTAL: S/"+sumaTotal;
}
function aK6(){
    keke.innerHTML += `
    Keke de limon <br>
    `;
    sumaTotal += 5.00;
    s.innerHTML="TOTAL: S/"+sumaTotal;
}
function aK7(){
    keke.innerHTML += `
    Keke de vainilla <br>
    `;
    sumaTotal += 5.00;
    s.innerHTML="TOTAL: S/"+sumaTotal;
}
function aK8(){
    keke.innerHTML += `
    Keke de vainilla <br>
    `;
    sumaTotal += 5.00;
    s.innerHTML="TOTAL: S/"+sumaTotal;
}
function limpiarTodo(){
    cafe.innerHTML = `
    
    `;
    galleta.innerHTML = `
    
    `;
    keke.innerHTML = `
    
    `;
    sumaTotal=0.0;
    s.innerHTML="TOTAL: S/" + sumaTotal;
}

