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

        if (response.status === 201) {
            alert("Usuario creado exitosamente")
        }
        else if (response.status === 404) {
            alert("No se pudo crear usuario ");
            throw new Error("No se pudo crear usuario ");
        } else if (response.status === 400) {
            alert("email no valido o contraseña vacia");
            throw new Error("email no valido o contraseña vacia");
        }
        else if (response.status === 500) {
            alert("No se pudo crear usuario ya existe");
            throw new Error("No se pudo crear usuario ya existe");
        }

        const data = await response.json();

        return data;
    }


    async loginUser(user: IRequestlogin, endPoint: string) {
        const headers: Record<string, string> = {
            'Content-Type': 'Application/json'
        }
        const response: Response = await fetch(`${this.url}${endPoint}`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(user)
        });

        // alert(response.body);

        const data = await response.json();
        // answer=data.JSON.stringify(data.message);
        alert (`data: ${JSON.stringify(data.message)}`);
        if (JSON.stringify(data.message) !=="Login successful") {
            throw new Error("No se pudo Inciar sesion");
            // alert("No se inicio sesion verifique los datos nuevamente");
        } else {
            alert(`Login successful, Bienvenido!`)
        }

        console.log(data.message);
        return (data.JSON.stringify(data.message))


    }


}