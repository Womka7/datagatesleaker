export function guardianLogin(){
    const user = sessionStorage.getItem('user');
    if(!user){
        alert('Al parecer tu sesión ha expirado debes iniciar sesión')
        window.location.href = "./"
    }
}

export function Logout(){
    sessionStorage.removeItem('user');
    window.location.href = "./"
}