import { IRequestlogin } from "../model/IResponselogin";

export class AuthController{
    url: string;

    constructor(url: string){
        this.url = url;
    }





    async loginUser(user: IRequestlogin , endPoint: string){
        const headers: Record<string, string>= {
            'Content-Type': 'Application/json'
        }
        const response:Response = await fetch(`${this.url}${endPoint}`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(user)
        });
    }


}