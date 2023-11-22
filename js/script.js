console.log("Entramos a la pagina!")

var me_gusta = 3;

function dar_like() {
    me_gusta++;
    var cantidad = document.querySelector(".cantidad"); //<span class="cantidad_3"> 3 </span> 
    cantidad.innerText = me_gusta;
}