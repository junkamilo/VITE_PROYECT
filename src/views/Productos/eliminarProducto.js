export const eliminarProducto = (id) =>{
    fetch(`http://localhost:3000/api/productos/${id}`,{
        method: 'DELETE'
    });
}