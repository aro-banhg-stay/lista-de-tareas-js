let inputTarea=document.getElementById("tarea");
let botonAgregar=document.getElementById("botonAgregar");
let listaTareas=document.getElementById("listaTareas");

botonAgregar.addEventListener("click", agregar);
var notareas=0;
var nocompletas=0;

function agregar(){
    if(inputTarea.value){
        //creo div y se agrego la clase de estilo tarea
        let elementoTarea=document.createElement('div');
        elementoTarea.classList.add("estiloTarea");
        listaTareas.appendChild(elementoTarea);

        //creamos parrafo y se le asigno el texto
        let texto=document.createElement('p');
        texto.innerText=inputTarea.value;
        elementoTarea.appendChild(texto);

        //creamos el div de los iconos
        let iconos=document.createElement("div")
        elementoTarea.appendChild(iconos);

        //crea el icono completa y se agrego clases
        let iconoCompleto=document.createElement("i");
        iconoCompleto.classList.add("bi","bi-check-square-fill","completa");
        iconos.appendChild(iconoCompleto);

        //crea el icono eliminar y se agrego clases
        let iconoEliminar=document.createElement("i");
        iconoEliminar.classList.add("bi","bi-trash-fill","eliminar");
        iconos.appendChild(iconoEliminar);

        //agregar un evento de click para eliminar tarea
        iconoEliminar.addEventListener('click',eliminarTarea);
        
        //agregar in evento de click para marcar tarea completa
        iconoCompleto.addEventListener('click',marcarCompleta);
        
        notareas++;
        document.getElementById("notareas").innerText=notareas;
        document.getElementById("norestantes").innerText=notareas-nocompletas;
    }
    else{
        alert("Captura una tarea");
    }
}
function eliminarTarea(e){
    let elementoEliminar=e.target.parentNode.parentNode;
    elementoEliminar.remove();
    notareas--;
    document.getElementById("notareas").innerText=notareas;
    document.getElementById("norestantes").innerText=notareas-nocompletas;
}

function marcarCompleta(e){
    let marcarTarea=e.target.parentNode.parentNode;
    marcarTarea.classList.add("marcarCompleto");

    let iconeliminar=e.target.nextSibling;
    iconeliminar.remove();

    nocompletas++;
    document.getElementById("nocompletas").innerText=nocompletas;

    document.getElementById("norestantes").innerText=notareas-nocompletas;
}