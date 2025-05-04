const createMenu = () =>{
    const app = document.querySelector('#app');
    const header = document.querySelector('#header');
    
    const div = document.createElement('div');
    
    const categorias = document.createElement('a');
    const productos = document.createElement('a');
    const logo = document.createElement('a');

    categorias.textContent = 'Categorias';
    productos.textContent = 'Productos';
    logo.textContent = 'Inicio';
    productos.setAttribute("href", '#productos');
    categorias.setAttribute('href' , '#categorias');
    logo.setAttribute('href' , '#');
    
    div.classList.add('menu');
    categorias.classList.add('menu__link');
    header.classList.add('container' , 'header');
    productos.classList.add('menu__link');
    logo.classList.add('menu__link');

    header.append(div);
    div.append(logo,categorias,productos);
    app
}
export default createMenu;

