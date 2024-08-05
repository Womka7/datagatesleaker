import {  IResponsePost } from "../model/IResponsePost";

export class PostController{
    url: string;
    constructor(url: string) {
        this.url = url;
    }

    async postPost(endPoint: string, dataNewPost: IResponsePost){

        const headers: Record<string, string> = {
            'Content-Type': 'Application/json',
            'data-user-login': `${sessionStorage.getItem('email')}`
        }
        const response = await fetch(`${this.url}${endPoint}`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(dataNewPost)
        });
        console.log(response.status);

        if (response.status !== 201) {
            alert("no se agrego post")
            throw new Error('Error al agregar el post');
        } else {
            alert('Post Agregado')
        }

        const data = response.json();
        return data;
    }
}