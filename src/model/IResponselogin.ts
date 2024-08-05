export interface IRequestlogin {
    email:    string;
    password: string;
}
export interface IResponseAuthlogin{
    message: string;
}
export interface IResponseregister {
    email:    string;
    password: string;
    id:       number;
}
