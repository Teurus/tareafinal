var mandar = document.getElementById("PROMO");

var numero = [ , , , , , , , , ];
for(var i = 0; i < numero.length; i++){
    numero[i] = parseInt(Math.random() * 24 + 1);
}

//mandar.innerHTML = numero[i]; FUNCIONA

for(var i = 0; i < numero.length; i++){
    // mandar.innerHTML += numero[i] + " ";
    switch(numero[i]){
        case 1:
            mandar.innerHTML += `
            <div class="c1">
                    Late    S/.9.00 <button onclick=aC1()>Añadir</button><br>
                    <img src="Imagenes/Café/CafeLate.jpg" alt="expresso">
                </div>
            `;
        break;
        case 2:
            mandar.innerHTML += `
            <div class="c1">
                    Capuccino   S/.9.00 <button onclick=aC2()>Añadir</button><br>
                    <img src="Imagenes/Café/Capuchino.jpg.jpg" alt="Cappuccino">
                </div>
            `;
        break;
        case 3:
            mandar.innerHTML += `
            <div class="c1">
                    Caramel Frapuchino   S/.7.00 <button onclick=aC3()>Añadir</button><br>
                    <img src="Imagenes/Café/CaramelFrapuchino.jpg" alt="americano"><br>
                </div>
            `;
        break;
        case 4:
            mandar.innerHTML += `
            <div class="c1">
                    Dopio S/.7.50 <button onclick=aC4()>Añadir</button><br>
                    <img src="Imagenes/Café/Doppio.jpg" alt="cafe con leche"><br>
                </div>
            `;
        break;
        case 5:
            mandar.innerHTML += `
            <div class="c1">
                    Expreso S/.7.50 <button onclick=aC5()>Añadir</button><br>
                    <img src="Imagenes/Café/Expreso.jpg" alt="mocca"><br>
                </div>
            `;
        break;
        case 6:
            mandar.innerHTML += `
            <div class="c1">
                    Frape S/.7.50 <button onclick=aC6()>Añadir</button><br>
                    <img src="Imagenes/Café/Frape.jpg" alt="frappe"><br>
                </div>
            `;
        break;
        case 7:
            mandar.innerHTML += `
            <div class="c1">
                    Lungo S/.8.00 <button onclick=aC7()>Añadir</button><br>
                <img src="Imagenes/Café/Lungo.jpg" alt="cortado"><br>
                </div>
            `;
        break;
        case 8:
            mandar.innerHTML += `
            <div class="c1">
                    Machiato S/.8.00 <button onclick=aC8()>Añadir</button><br>
                    <img src="Imagenes/Café/Macchiato.jpg" alt="carajillo"><br>
                </div>
            `;
        break;
        case 9:
            mandar.innerHTML += `
            <div class="g1" id="ga1">
                Galletas de alfajor   S/.3.50 <button onclick=aG1()>Añadir</button><br>
                <img src="Imagenes/Galleta/Alfajor.jpg" alt="galletas"><br>
            </div>
            `;
        break;
        case 10:
            mandar.innerHTML += `
            <div class="g1" id="ga2">
                Galletas con chocochips   S/.3.50 <button onclick=aG2()>Añadir</button><br>
                <img src="Imagenes/Galleta/Chips.jpg" alt="galletas"><br>
            </div>
            `;
        break;
        case 11:
            mandar.innerHTML += `
            <div class="g1" id="ga3">
                Galletas de chocolate   S/.3.50 <button onclick=aG3()>Añadir</button><br>
                <img src="Imagenes/Galleta/Chocolate.jpg" alt="galletas"><br>
            </div>
            `;
        break;
        case 12:
            mandar.innerHTML += `
            <div class="g1" id="ga4">
                Galletas con crema        S/3.50 <button onclick=aG4()>Añadir</button><br>
                <img src="Imagenes/Galleta/Crema.jpg" alt="galletas"><br>
            </div>
            `;
        break;
        case 13:
            mandar.innerHTML += `
            <div class="g1" id="ga5">
                Galleta con lucuma     S/4.00 <button onclick=aG5()>Añadir</button><br>
                <img src="Imagenes/Galleta/Lucuma.jpg" alt="galletas"><br>
            </div>
            `;
        break;
        case 14:
            mandar.innerHTML += `
            <div class="g1" id="ga6">
                Galletas con manjar  S/3.00 <button onclick=aG6()>Añadir</button><br>
                <img src="Imagenes/Galleta/Manjar.jpg" alt="galletas"><br>
            </div>
            `;
        break;
        case 15:
            mandar.innerHTML += `
            <div class="g1" id="ga7">
                Galletas con nutella  S/3.00 <button onclick=aG7()>Añadir</button><br>
            <img src="Imagenes/Galleta/Nutella.jpg" alt="galletas"><br>
            </div>
            `;
        break;
        case 16:
            mandar.innerHTML += `
            <div class="g1" id="ga8">
                Galletas S'More  S/3.00 <button onclick=aG8()>Añadir</button><br>
                <img src="Imagenes/Galleta/S'More.jpg" alt="galletas"><br>
            </div>
            `;
        break;
        case 17:
            mandar.innerHTML += `
            <div class="k1">
                Keke de calabaza     S/.5.00 <button onclick=aK1()>Añadir</button><br>
                <img src="Imagenes/Keke/calabaza.jpg" alt="naranja"><br>
            </div>
            `;
        break;
        case 18:
            mandar.innerHTML += `
            <div class="k1">
                Keke de chocolate   S/.5.00 <button onclick=aK2()>Añadir</button><br>
                <img src="Imagenes/Keke/chocolate.jpg" alt="chocolate"><br>
            </div>
            `;
        break;
        case 19:
            mandar.innerHTML += `
            <div class="k1">
                Keke de fresa     S/.5.00 <button onclick=aK3()>Añadir</button><br>
                <img src="Imagenes/Keke/fresa.jpg" alt="marmoleado"><br>
            </div>
            `;
        break;
        case 20:
            mandar.innerHTML += `
            <div class="k1">
                Keke de hershey   S/.5.00 <button onclick=aK4()>Añadir</button><br>
                <img src="Imagenes/Keke/hershey.jpg" alt="zanahoria"><br>
            </div>
            `;
        break;
        case 21:
            mandar.innerHTML += `
            <div class="k1">
                Cupcake de oreo          S/.5.00 <button onclick=aK5()>Añadir</button><br>
                <img src="Imagenes/Keke/oreo-cupcake.jpg" alt="keke ingles"><br>
            </div>
            `;
        break;
        case 22:
            mandar.innerHTML += `
            <div class="k1">
                Pie de limon      S/.5.00 <button onclick=aK6()>Añadir</button><br>
                <img src="Imagenes/Keke/piedelimon.jpg" alt="de limon"><br>
            </div>
            `;
        break;
        case 23:
            mandar.innerHTML += `
            <div class="k1">
                Keke de vainilla   S/.5.00 <button onclick=aK7()>Añadir</button><br>
                <img src="Imagenes/Keke/vainilla.jpg" alt="mandarina"><br>
                </div>
            `;
        break;
        case 24:
            mandar.innerHTML += `
            <div class="k1">
                Keke de zanahoria       S/.5.00 <button onclick=aK8()>Añadir</button><br>
                <img src="Imagenes/Keke/zanahoria.jpg" alt="marmoleado"><br>
            </div> 
            `;
        break;
        default:
            mandar.innerHTML += `
            <h1>Sebastian</h1>
            `;
        break;
    }
}
//Buscador de contenido


//Ejecutando funciones
document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);

//Declarando variables
bars_search =       document.getElementById("ctn-bars-search");
cover_ctn_search =  document.getElementById("cover-ctn-search");
inputSearch =       document.getElementById("inputSearch");
box_search =        document.getElementById("box-search");


//Funcion para mostrar el buscador
function mostrar_buscador(){

    bars_search.style.top = "160px";
    cover_ctn_search.style.display = "block";
    inputSearch.focus();

    if (inputSearch.value === ""){
        box_search.style.display = "none";
    }

}

//Funcion para ocultar el buscador
function ocultar_buscador(){

    bars_search.style.top = "-100px";
    cover_ctn_search.style.display = "none";
    inputSearch.value = "";
    box_search.style.display = "none";

}


//Creando filtrado de busqueda

document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

function buscador_interno(){


    filter = inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    //Recorriendo elementos a filtrar mediante los "li"
    for (i = 0; i < li.length; i++){

        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){

            li[i].style.display = "";
            box_search.style.display = "block";

            if (inputSearch.value === ""){
                box_search.style.display = "none";
            }

        }else{
            li[i].style.display = "none";
        }

    }



}

document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
}

var sumaTotal = 0.0;
var cafe = document.getElementById("ca1");
var galleta = document.getElementById("ga1");
var keke = document.getElementById("ke1");
var s = document.getElementById("total1");

function aC1(){
    cafe.innerHTML += `
    Cafe late <br>
    `;
    sumaTotal += 9.00;
    s.innerHTML="TOTAL1: S/"+sumaTotal;
}
function aC2(){
    cafe.innerHTML += `
    Cafe capuccino <br>
    `;
    sumaTotal += 9.00;
    s.innerHTML="TOTAL1: S/"+sumaTotal;
}
function aC3(){
    cafe.innerHTML += `
    Cafe frapuchino <br>
    `;
    sumaTotal += 7.00;
    s.innerHTML="TOTAL1: S/"+sumaTotal;
}
function aC4(){
    cafe.innerHTML += `
    Café dopio <br>
    `;
    sumaTotal += 7.50;
    s.innerHTML="TOTAL1: S/"+sumaTotal;
}
function aC5(){
    cafe.innerHTML += `
    Cafe expreso <br>
    `;
    sumaTotal += 7.50;
    s.innerHTML="TOTAL1: S/"+sumaTotal;
}
function aC6(){
    cafe.innerHTML += `
    Cafe frape <br>
    `;
    sumaTotal += 7.50;
    s.innerHTML="TOTAL1: S/"+sumaTotal;
}
function aC7(){
    cafe.innerHTML += `
    Cafe lungo <br>
    `;
    sumaTotal += 8.00;
    s.innerHTML="TOTAL1: S/"+sumaTotal;
}
function aC8(){
    cafe.innerHTML += `
    Cafe machiato <br>
    `;
    sumaTotal += 8.00;
    s.innerHTML="TOTAL1: S/"+sumaTotal;
}


function aG1(){
    galleta.innerHTML += `
    Galleta de alfajor <br>
    `;
    sumaTotal += 3.50;
    s.innerHTML="TOTAL1: S/"+sumaTotal;
}
function aG2(){
    galleta.innerHTML += `
    Galleta de chocochips <br>
    `;
    sumaTotal += 3.50;
    s.innerHTML="TOTAL1: S/"+sumaTotal;
}
function aG3(){
    galleta.innerHTML += `
    Galleta de chocolate <br>
    `;
    sumaTotal += 3.50;
    s.innerHTML="TOTAL1: S/"+sumaTotal;
}
function aG4(){
    galleta.innerHTML += `
    Galleta de crema <br>
    `;
    sumaTotal += 3.50;
    s.innerHTML="TOTAL1: S/"+sumaTotal;
}
function aG5(){
    galleta.innerHTML += `
    Galleta de lucuma <br>
    `;
    sumaTotal += 4.00;
    s.innerHTML="TOTAL1: S/"+sumaTotal;
}
function aG6(){
    galleta.innerHTML += `
    Galleta de manjar <br>
    `;
    sumaTotal += 3.00;
    s.innerHTML="TOTAL1: S/"+sumaTotal;
}
function aG7(){
    galleta.innerHTML += `
    Galleta de nutella <br>
    `;
    sumaTotal += 3.00;
    s.innerHTML="TOTAL1: S/"+sumaTotal;
}
function aG8(){
    galleta.innerHTML += `
    Galleta de s'more <br>
    `;
    sumaTotal += 3.00;
    s.innerHTML="TOTAL1: S/"+sumaTotal;
}

function aK1(){
    keke.innerHTML += `
    Keke de calabaza <br>
    `;
    sumaTotal += 5.00;
    s.innerHTML="TOTAL1: S/"+sumaTotal;
}
function aK2(){
    keke.innerHTML += `
    Keke de chocolate <br>
    `;
    sumaTotal += 5.00;
    s.innerHTML="TOTAL1: S/"+sumaTotal;
}
function aK3(){
    keke.innerHTML += `
    Keke de fresa <br>
    `;
    sumaTotal += 5.00;
    s.innerHTML="TOTAL1: S/"+sumaTotal;
}
function aK4(){
    keke.innerHTML += `
    Keke de hershey <br>
    `;
    sumaTotal += 5.00;
    s.innerHTML="TOTAL1: S/"+sumaTotal;
}
function aK5(){
    keke.innerHTML += `
    Keke de oreo <br>
    `;
    sumaTotal += 5.00;
    s.innerHTML="TOTAL1: S/"+sumaTotal;
}
function aK6(){
    keke.innerHTML += `
    Keke de limon <br>
    `;
    sumaTotal += 5.00;
    s.innerHTML="TOTAL1: S/"+sumaTotal;
}
function aK7(){
    keke.innerHTML += `
    Keke de vainilla <br>
    `;
    sumaTotal += 5.00;
    s.innerHTML="TOTAL1: S/"+sumaTotal;
}
function aK8(){
    keke.innerHTML += `
    Keke de vainilla <br>
    `;
    sumaTotal += 5.00;
    s.innerHTML="TOTAL1: S/"+sumaTotal;
}
function limpiarTodo(){
    cafe.innerHTML = `
    
    `;
    galleta.innerHTML = `
    
    `;
    keke.innerHTML = `
    
    `;
    sumaTotal=0.0;
    s.innerHTML="TOTAL1: S/" + sumaTotal;
}