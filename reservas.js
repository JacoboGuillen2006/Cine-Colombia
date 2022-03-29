let contenedor=document.getElementById("contenedor")
contenedor.addEventListener("click",function(evento){
    if(evento.target.classList.contains("w-100")){
        evento.target.src="img/rojo.png"
    }
})


let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento) {
    let asiento=document.getElementById("asiento").value 
    let cantidad=document.getElementById("cantidad").value
    let total = asiento*cantidad 
    alert("el total de su compra es:"+total)
})