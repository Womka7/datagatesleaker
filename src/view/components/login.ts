
//Funcion que se encarga mediante el dom crear un login con correo y password
export function createLogin() {

    //En el index html se encuentra las secciones con su respectivo id para mostrar este componente
    const authSection = document.querySelector(".section-login")as HTMLElement;

    // Crea el formulario de inicio de sesión

    const formLogin = document.createElement("form") as HTMLFormElement;
    formLogin.setAttribute("id", "login-form");

    const title = document.createElement("h2") as HTMLHeadingElement;
    title.innerText = "Data Leaker Gates";

    const div = document.createElement("div") as HTMLDivElement;
    div.classList.add("container-input");

    // Grupo de input correo
    const emailGroup = document.createElement("div") as HTMLDivElement;
    emailGroup.classList.add('form-group');
    const emailInput = document.createElement("input") as HTMLInputElement;
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("id", "emaillogin");
    emailInput.setAttribute("placeholder", " "); 
    const emailLabel = document.createElement("label") as HTMLLabelElement;
    emailLabel.setAttribute("for", "email");
    emailLabel.innerText = "Email Address";

    // Grupo de input contraseña
    const passwordGroup = document.createElement("div") as HTMLDivElement;
    passwordGroup.classList.add('form-group');
    const passwordInput = document.createElement("input") as HTMLInputElement;
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("id", "passwordlogin");
    passwordInput.setAttribute("placeholder", " "); 
    const passwordLabel = document.createElement("label") as HTMLLabelElement;
    passwordLabel.setAttribute("for", "password");
    passwordLabel.innerText = "Password";

    // Botón de inicio de sesión con un evento submit
    const loginButton = document.createElement("button") as HTMLButtonElement;
    loginButton.setAttribute("type", "submit");
    loginButton.innerText = "Log in";
    loginButton.classList.add('btn-login');

    // Construccion del DOM
    authSection.appendChild(formLogin);
    formLogin.append(title, div);
    div.append(emailGroup, passwordGroup, loginButton);
    emailGroup.append(emailInput, emailLabel);
    passwordGroup.append(passwordInput, passwordLabel);
}
