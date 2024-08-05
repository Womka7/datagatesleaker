export function guardianLogin(){
    const user = sessionStorage.getItem('email');
    if(!user){
        alert('Al parecer tu sesión ha expirado debes iniciar sesión')
        window.location.href = "./"
    }
}

export function Logout(){
    sessionStorage.removeItem('email');
    window.location.href = "./"
}