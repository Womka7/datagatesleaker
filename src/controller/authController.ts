import { IRequestlogin, IResponseAuthlogin, IResponseregister } from "../model/IResponselogin";

export class AuthController {
    url: string;

    constructor(url: string) {
        this.url = url;
    }

    async registerUser(endPoint: string, newUser: IRequestlogin): Promise<IResponseregister> {

        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
        }
        const response: Response = await fetch(`${this.url}${endPoint}`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(newUser),
        });

        const data = await response.json();

        alert(`Successfully registered ${newUser.email}`);
        if (response.status ===404) {
            alert("No se pudo crear usuario ");
            throw new Error("No se pudo crear usuario ");
        } else if (response.status === 400) {
            alert("email no valido o contraseña vacia");
            throw new Error("email no valido o contraseña vacia");
        }
        else if(response.status === 500) {
            alert("No se pudo crear usuario ya existe");
            throw new Error("No se pudo crear usuario ya existe");
        }else{
            alert("Se creo su usuario");
        }


        return data;
    }


    async loginUser(user: IRequestlogin, endPoint: string):Promise<IResponseAuthlogin> {
        const headers: Record<string, string> = {
            'Content-Type': 'Application/json'
        }
        const response = await fetch(`${this.url}${endPoint}`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(user)
        });
        
        const data = await response.json();

        alert(`response login status ${response.status}`);
        
        if (data.message !=="Login successful") {
            throw new Error("No se pudo iniciar sesion verifique su correo o contraseña de nuevo");
        }return data;
       
    }


}