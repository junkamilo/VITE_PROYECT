export const productoController = async() =>{
    const response = await fetch(`http://localhost:3000/api/productos`);
        const productos = await response.json();
        console.log(productos.data);
        
        const tabla = document.querySelector("#tabla_productos");

        const tabla_cuerpo = document.createElement("tbody");
        const tr = document.createElement("tr");
        const th = document.createElement("th");
        th.textContent = "Nombre"
        th.textContent = "Descripcion"
        th.textContent = "Precio"
        
        tabla.append(tabla_cuerpo);
        tabla_cuerpo.append(tr,th);
        tr.appendChild(th);

        console.log(tabla_cuerpo);

        productos.data.forEach(({nombre,descripcion,precio}) => {            
             const newRow = tabla_cuerpo.insertRow(0);
             const newceldaNombre = newRow.insertCell(0);
             const newceldaDescripcion = newRow.insertCell(1);
             const newPrecio = newRow.insertCell(2);
             const newceldaAcciones = newRow.insertCell(3);

             const div_botonera = document.createElement("div");
             const button_eliminar = document.createElement("button");
             const button_editar = document.createElement("button");

            //agregamos clases al div a los botones
            div_botonera.classList.add("botonera");
            button_editar.classList.add("btn", "btn--samall" , "editar");
            button_eliminar.classList.add("btn", "btn--samall", "btn--danger" , "eliminar");

             button_eliminar.textContent = "Eliminar";
             button_editar.textContent = "Editar";

             div_botonera.append(button_eliminar,button_editar);
             newceldaAcciones.append(div_botonera);

             newceldaNombre.innerText = nombre;
             newceldaDescripcion.innerText = descripcion;
             newPrecio.innerText = precio;

        });
}

document.addEventListener("click" , async (e) => {
    if (e.target.matches(".editar")) {
        const data = await productoController(e.target);
        console.log(data);
    }
    if (e.target.matches(".eliminar")) {
        
    }
});