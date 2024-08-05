import { AuthController } from "../../controller/authController";
import { IRequestlogin, IResponseregister } from "../../model/IResponselogin";


export function createRegister() {
    // Obtén el elemento <section> del documento
    const registerSection = document.querySelector(".section-register") as HTMLElement;

    // Crea el formulario de registro
    const formRegister = document.createElement("form") as HTMLFormElement;
    formRegister.setAttribute("id", "register-form");

    // Crea el título
    const title = document.createElement("h2") as HTMLHeadingElement;
    title.innerText = "Register Data Leaker Gates";

    // Crea el contenedor de los campos de entrada
    const div = document.createElement("div") as HTMLDivElement;
    div.classList.add("container-input");


    // Grupo de email
    const emailGroup = document.createElement("div") as HTMLDivElement;
    emailGroup.classList.add('form-group');
    const emailInput = document.createElement("input") as HTMLInputElement;
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("id", "emailregister");
    emailInput.setAttribute("placeholder", " ");
    const emailLabel = document.createElement("label") as HTMLLabelElement;
    emailLabel.setAttribute("for", "email");
    emailLabel.innerText = "Email Address";
    emailInput.required = true;

    // Grupo de contraseña
    const passwordGroup = document.createElement("div") as HTMLDivElement;
    passwordGroup.classList.add('form-group');
    const passwordInput = document.createElement("input") as HTMLInputElement;
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("id", "passwordregister");
    passwordInput.setAttribute("placeholder", " ");
    const passwordLabel = document.createElement("label") as HTMLLabelElement;
    passwordLabel.setAttribute("for", "password");
    passwordLabel.innerText = "Password";
    passwordInput.required = true;

    // Botón de registro
    const registerButton = document.createElement("button") as HTMLButtonElement;
    registerButton.setAttribute("type", "submit");
    registerButton.innerText = "Register";
    registerButton.classList.add('btn-register');

    // Construye el DOM
    registerSection.appendChild(formRegister);
    formRegister.append(title, div);
    div.append(emailGroup, passwordGroup, registerButton);
    emailGroup.append(emailInput, emailLabel);
    passwordGroup.append(passwordInput, passwordLabel);

    formRegister.addEventListener("submit", async (event: Event) => {
        event.preventDefault();
        
        const createNewUser: IRequestlogin = {
            email: emailInput.value,
            password: passwordInput.value
        }
        const authcontrollerRegister = new AuthController("https://api-posts.codificando.xyz/");
        try {
            //"register" es el endpoint que se agrega al dominio de authcontroller
            const responseCreateNewUser: IResponseregister = await authcontrollerRegister.registerUser("users/register", createNewUser);
            console.log(responseCreateNewUser);
            window.location.href = "la ruta"
        } catch (error) {
            formRegister.reset();
            console.log(error);
        }


    })
}