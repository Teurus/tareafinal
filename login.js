function login(){
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;
    
    if(usuario == "UsuarioNeira123" && contraseña == "CafeLab000"){
        window.location = "index.html"
    }else{
        window.location = "login.html"
    }
}