/* PROGRAMACION PARA ACTIVAR LA CARTA*/

let todas_las_cartas = document.querySelectorAll(".carta_tracera");

todas_las_cartas.forEach((cada_div)=>{
   cada_div.addEventListener("click", ()=>{
    

    let cantidad_descubiertas = document.querySelectorAll(".activar")
    total_descubiertas = cantidad_descubiertas.length;
    

    if(total_descubiertas <2){
        cada_div.classList.add("activar")
        cantidad_descubiertas = document.querySelectorAll(".activar")

        if(total_descubiertas==1){
            setTimeout(()=>{
                cantidad_descubiertas.forEach((cada_carta_descubierta)=>{
                    cada_carta_descubierta.classList.remove("activar")

                });
            },(1000))
        }

    }

     });
    });
    
