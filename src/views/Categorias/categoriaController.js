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
form.addEventListener("submit" , guardar);

}