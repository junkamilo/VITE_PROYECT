export const categoriaController = async () =>{
        const response = await fetch("http://localhost:3000/api/categorias");
        const categorias = await response.json();
        console.log(categorias.data);
        
        const tabla = document.querySelector("#tabla_categorias");

        const tabla_cuerpo = document.createElement("tbody");
        const tr = document.createElement("tr");
        const th = document.createElement("th");
        th.textContent = "Nombre"
        
        tabla.append(tabla_cuerpo);
        tabla_cuerpo.append(tr,th)
        tr.appendChild(th);

        console.log(tabla_cuerpo);

        categorias.data.forEach(({nombre}) => {
             const newRow = tabla_cuerpo.insertRow(0);
             const newceldaNombre = newRow.insertCell(0);
             newceldaNombre.innerText = nombre;
        })
}