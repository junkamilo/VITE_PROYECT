import { loadView } from "../helpers/loadView.js";
import { categoriaController } from "../views/categorias/categoriaController.js";
import { inicioController } from "../views/inicio/inicioController.js";
import { productoController } from "../views/productos/productoController.js";
const routes = {
    productos :{
        "template" : "productos/index.html",
        controlador : productoController
    },
    categorias :{
        "template" : "categorias/index.html",
        controlador : categoriaController
    },
    inicio :{
        "template" : "inicio/index.html",
        controlador : inicioController 
    }
}
export const router = (app) => {
    const hash = location.hash.slice(1);
    const {template , controlador} = matchRoute(hash);  
    loadView(app,template);
    controlador();
}

const matchRoute = (hash) =>{
    if(!hash){
        return routes['inicio'];
    }
    for(const route in routes){
        if (route === hash) {
            return routes[route]
        }

    }
}