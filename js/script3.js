console.log("Entramos a la pagina!")

var me_gusta = 3;
var me_gusta2 =12;
var me_gusta3 = 9;

function dar_like() {
    me_gusta++;
    var cantidad = document.querySelector(".cantidad"); //<span class="cantidad_3"> 3 </span> 
    cantidad.innerText = me_gusta;
}
var me_gusta = 3;

function dar_like2() {
    me_gusta2++;
    var cantidad = document.querySelector(".cantidad2"); //<span class="cantidad_3"> 3 </span> 
    cantidad.innerText = me_gusta2;
}

var me_gusta = 3;

function dar_like3() {
    me_gusta3++;
    var cantidad = document.querySelector(".cantidad3"); //<span class="cantidad_3"> 3 </span> 
    cantidad.innerText = me_gusta3;
}