import { createLogin } from "./view/components/login";
import { createRegister } from "./view/components/register";

document.addEventListener('DOMContentLoaded', () => {
    createLogin();
    createRegister();

    const showLoginButton = document.getElementById('show-login') as HTMLButtonElement;
    const showRegisterButton = document.getElementById('show-register') as HTMLButtonElement;
    const loginSection = document.querySelector('.section-login') as HTMLElement;
    const registerSection = document.querySelector('.section-register') as HTMLElement;
    // Mostrar sólo el formulario de inicio de sesión al cargar la página
    registerSection.style.display = 'none';

    // Event listeners para los botones de cambio
    showLoginButton?.addEventListener('click', () => {
        loginSection.style.display = '';
        registerSection.style.display = 'none';
    });

    showRegisterButton?.addEventListener('click', () => {
        loginSection.style.display = 'none';
        registerSection.style.display = '';
    });
});