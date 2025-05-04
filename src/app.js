import './main.css';
import  createMenu  from './componentes/header.js';
import { router } from './router/router.js';

  const app = document.querySelector('#app');
  window.addEventListener('hashchange', () =>{
    router(app);
  });
  window.addEventListener('DOMContentLoaded', () =>{
    router(app);
  });
  createMenu();
