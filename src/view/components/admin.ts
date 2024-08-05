import { Logout, guardianLogin } from "../../controller/guardian";
import { createPostForm } from "./formAddPost";



document.addEventListener('DOMContentLoaded', () => {
    createPostForm();

    // Elementos del DOM
    const postSection = document.querySelector('.section-add-post') as HTMLElement;
    const showAddpostButton = document.getElementById('show-Add-post') as HTMLButtonElement;
    const showCardsButton = document.getElementById('show-cards') as HTMLButtonElement;
    const showTablepostButton = document.getElementById('show-table-post') as HTMLButtonElement;
    const logoutButton = document.getElementById('logout-button') as HTMLButtonElement;
   
    if (sessionStorage.getItem('user')) {
        guardianLogin();
    }

    logoutButton.addEventListener('click', () => {
        Logout(); 
    });
    // Mostrar la sección de agregar post al cargar

    // Event listeners para los botones
    showAddpostButton.addEventListener('click', () => {
        postSection.style.display = '';
        // Aquí puedes agregar lógica para ocultar otras secciones si es necesario
    });

    showCardsButton.addEventListener('click', () => {
        // Lógica para mostrar la sección de listar post
        postSection.style.display = 'none';
        // Aquí puedes agregar lógica para mostrar la sección de listar post
    });

    showTablepostButton.addEventListener('click', () => {
        // Lógica para mostrar la sección de eliminar/actualizar post
        postSection.style.display = 'none';
        // Aquí puedes agregar lógica para mostrar la sección de eliminar/actualizar post
    });

   
});