import './main.css';
import  createMenu  from './componentes/header.js';
import { router } from './router/router.js';
import { editarProducto , eliminarProducto , productoController } from './views/productos/index.js';

const tabla = document.querySelector("#tabla_productos");



  const cargar_productos = async () => {
    const productos = await productoController();
  }
  const crearFila = async ()=> {
    const arraysProductos = await productoController();
  }


  const app = document.querySelector('#app');
  window.addEventListener('hashchange', () =>{
    router(app);
  });
  window.addEventListener('DOMContentLoaded', () =>{
    router(app);
  });

createMenu();
crearFila();
cargar_productos();