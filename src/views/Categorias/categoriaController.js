export const categoriaController = async () =>{
 await new Promise(window.requestAnimationFrame);

 const form = document.querySelector('form');
 const nombre = document.querySelector('#nombre');
 const descripcion = document.querySelector('#descripcion');

 const guardar = (e) =>{
        e.preventDefault();

        const data = {
        nombre : nombre.value,
        descripcion : descripcion.value
        }

        fetch('http://localhost:3000/api/categorias', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
                .then((response) => response.json())
                .then((json) => console.log(json));
 }

 const listar = async () => {
  const tabla = document.querySelector('tbody');
  const solicitud =  await fetch('http://localhost:3000/api/categorias');
  const datos = await solicitud.json();
  console.log(datos.data);
  

  datos.forEach(({id, nombre, descripcion}) => {
    const tr = document.createElement('tr');
    const tdNombre = document.createElement('td');
    const tdDescripcion = document.createElement('td');

    tdNombre.textContent = nombre;
    tdDescripcion.textContent = descripcion;

    tr.append(tdNombre,tdDescripcion);
    tabla.append(tr);

  });
 }

 listar();
form.addEventListener("submit" , guardar);

}