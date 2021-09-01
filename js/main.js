


const tecnologiasClass = document.querySelectorAll(".contenedor-tecnologias");
console.log(tecnologiasClass);

for (var i = 0; i < tecnologiasClass.length; i++) {
    console.log(tecnologiasClass[i]);
    if (i !== 0) {
        tecnologiasClass[i].classList.add("ocultar-seccion");
    }
    console.log("entra")
}



