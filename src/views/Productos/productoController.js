export const productoController = async() =>{
    try {
        const response = await fetch(`http://localhost:3000/api/productos`);
        const productos = await response.json();
        return productos
    } catch (error) {
        console.log(error);   
    }
}