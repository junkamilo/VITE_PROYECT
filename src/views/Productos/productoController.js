export const productoController = async() =>{
    await new Promise(window.requestAnimationFrame);

    const form = document.querySelector('form');
    const nombre = document.querySelector('#nombre');
    const precio = document.querySelector('#precio');
    const descripcion = document.querySelector('#descripcion');

    const guardar = (e) =>{
           e.preventDefault();
   
           const data = {
           nombre : nombre.value,
           descripcion : descripcion.value,
           precio: precio.value,
           categoria_id : listar_categorias.value
           }
   
           fetch('http://localhost:3000/api/productos', {
                   method: 'POST',
                   body: JSON.stringify(data),
                   headers: {
                     'Content-type': 'application/json; charset=UTF-8',
                   },
                 })
                   .then((response) => response.json())
                   .then((json) => console.log(json));
    }
   form.addEventListener("submit" , guardar);
}