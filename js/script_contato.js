function DadosContato() {
    let nome = document.getElementById("nome");
    let email = document.getElementById("email")
    let mensagem = document.getElementById("mensagem");

    let dados = {Nome: nome, Email: email, Mensagem: mensagem};

    console.log(dados)

    document.getElementById('form-login').reset();

}