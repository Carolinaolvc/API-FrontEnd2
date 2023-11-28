function EntrarLogin() {
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    let dadosAdm = {email: usuario, senha: senha};

    if (validarUsuario(dadosAdm)) {
        alert("Login realizado com sucesso! :) ");
        window.location.href = "area_adm.html";
    } else {
        alert("Usuário ou senha inválidos! :( ").reset();
    }

    document.getElementById('form-login').reset();
    
}